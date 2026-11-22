import {validSite} from './site-schema.mjs';
const ORIGINS = new Set(['https://patrickfischerksa.github.io','http://127.0.0.1:5180','http://127.0.0.1:5173','http://localhost:5173']);
const TYPES = new Set(['image/jpeg','image/png','image/webp','image/gif','image/avif','video/mp4','video/webm','video/quicktime','video/ogg','audio/mpeg','audio/wav','audio/x-wav','audio/ogg','audio/mp4','audio/webm','audio/flac']);
function json(body, status=200) {return Response.json(body,{status,headers:{'Cache-Control':'no-store'}});}
async function authorized(request,env) {
 const token=request.headers.get('Authorization')?.replace(/^Bearer /,'') || '';
 if(!token || !env.EDIT_TOKEN_HASH) return false;
 const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token)))).map(x=>x.toString(16).padStart(2,'0')).join('');
 return hash===env.EDIT_TOKEN_HASH;
}
export function validState(s,origin) {
 if(!validSite(s?.site,origin))return false;
 if(!s || typeof s!=='object' || Array.isArray(s))return false;
 for(const key of ['texts','media']){
  const values=s[key];if(!values || typeof values!=='object' || Array.isArray(values) || Object.keys(values).length>1500)return false;
  for(const [id,value] of Object.entries(values)){
   if(!/^[a-zA-Z0-9_.:-]{1,160}$/.test(id)||typeof value!=='string'||value.length>50000)return false;
   if(key==='media' && value && !(value.startsWith(origin+'/media/') && /^[a-f0-9-]{36}$/.test(value.slice((origin+'/media/').length))))return false;
  }
 }
 return Object.keys(s).every(k=>['texts','media','site'].includes(k));
}
export async function handle(request,env) {
 const url=new URL(request.url);
 if(url.pathname==='/health')return json({ok:true});
 if(url.pathname==='/api/state' && request.method==='GET') {
  const obj=await env.MEDIA.get('project/state.json');
  return json(obj?await obj.json():{revision:0,state:null,updatedAt:''});
 }
 if(url.pathname.startsWith('/media/') && ['GET','HEAD'].includes(request.method)) {
  const key=url.pathname.slice(7); if(!/^[a-f0-9-]{36}$/.test(key))return json({error:'Nicht gefunden'},404);
  const obj=await env.MEDIA.get(key,{range:request.headers}); if(!obj)return json({error:'Nicht gefunden'},404);
  const headers=new Headers({'Cache-Control':'public, max-age=31536000, immutable','X-Content-Type-Options':'nosniff','Accept-Ranges':'bytes','Content-Security-Policy':"default-src 'none'; sandbox"});obj.writeHttpMetadata(headers);headers.set('ETag',obj.httpEtag);
  let status=200;
  if(request.headers.has('Range') && obj.range && 'offset' in obj.range){status=206;headers.set('Content-Range',`bytes ${obj.range.offset}-${obj.range.offset+obj.range.length-1}/${obj.size}`);headers.set('Content-Length',String(obj.range.length));}else headers.set('Content-Length',String(obj.size));
  return new Response(request.method==='HEAD'?null:obj.body,{status,headers});
 }
 if(!await authorized(request,env))return json({error:'Bearbeitungslink erforderlich oder ungültig.'},401);
 if(url.pathname==='/api/auth')return json({ok:true});
 if(url.pathname==='/api/upload' && request.method==='POST') {
  const type=(request.headers.get('content-type')||'').split(';')[0];
  const length=Number(request.headers.get('content-length'));
  if(!TYPES.has(type))return json({error:'Unterstützt: JPG, PNG, WebP, GIF, AVIF, MP4, WebM, MOV, OGG, MP3, WAV, M4A, FLAC.'},415);
  const limit=type.startsWith('image/')?15*1024*1024:60*1024*1024;
  if(!length || length>limit)return json({error:'Datei zu groß (Bild max. 15 MB, Video/Ton max. 60 MB).'},413);
  const key=crypto.randomUUID();await env.MEDIA.put(key,request.body,{httpMetadata:{contentType:type}});
  return json({url:url.origin+'/media/'+key},201);
 }
 if(url.pathname==='/api/state' && request.method==='PUT') {
  if(Number(request.headers.get('content-length'))>600000)return json({error:'Projekt zu groß'},413);
  const raw=await request.text();if(raw.length>600000)return json({error:'Projekt zu groß'},413);
  let data;try{data=JSON.parse(raw);}catch{return json({error:'Ungültige Daten'},400);}
  // Preserve new site management data when an older open client saves legacy fields.
  if(data?.state && typeof data.state==='object' && !Array.isArray(data.state) && data.state.site===undefined){
   const existing=await env.MEDIA.get('project/state.json');if(existing){const previous=await existing.json();if(previous.state?.site)data.state.site=previous.state.site;}
  }
  if(!Number.isSafeInteger(data.revision)||!validState(data.state,url.origin))return json({error:'Ungültige Projektdaten oder Medienadressen'},400);
  const obj=await env.MEDIA.get('project/state.json');
  const previous=obj?await obj.json():{revision:0,state:null,updatedAt:''};
  if(data.revision!==previous.revision)return json({error:'Die gemeinsame Version wurde inzwischen geändert.'},409);
  // Save the immutable previous revision before the atomic conditional write.
  // Concurrent writers archive the same snapshot; only one state write can succeed.
  if(previous.state)await env.MEDIA.put('history/'+String(previous.revision).padStart(12,'0')+'.json',JSON.stringify(previous),{onlyIf:new Headers({'If-None-Match':'*'}),customMetadata:{updated_at:previous.updatedAt}});
  const next={revision:previous.revision+1,state:data.state,updatedAt:new Date().toISOString()};
  const saved=await env.MEDIA.put('project/state.json',JSON.stringify(next),{onlyIf:new Headers(obj?{'If-Match':obj.httpEtag}:{'If-None-Match':'*'}),httpMetadata:{contentType:'application/json'}});
  if(!saved)return json({error:'Die gemeinsame Version wurde inzwischen geändert.'},409);
  return json(next);
 }
 if(url.pathname==='/api/history' && request.method==='GET'){
  const current=await env.MEDIA.get('project/state.json');const revision=current?(await current.json()).revision:0;
  const items=await env.MEDIA.list({prefix:'history/',startAfter:'history/'+String(Math.max(0,revision-51)).padStart(12,'0')+'.json',include:['customMetadata'],limit:100});
  return json({versions:items.objects.map(o=>({revision:Number(o.key.slice(8,-5)),updated_at:o.customMetadata?.updated_at||o.uploaded.toISOString()})).sort((a,b)=>b.revision-a.revision).slice(0,50)});
 }
 if(/^\/api\/history\/\d+$/.test(url.pathname) && request.method==='GET'){
  const obj=await env.MEDIA.get('history/'+String(Number(url.pathname.split('/').pop())).padStart(12,'0')+'.json');
  return obj?json(await obj.json()):json({error:'Version nicht gefunden'},404);
 }
 return json({error:'Nicht gefunden'},404);
}
export default {async fetch(request,env){
 const origin=request.headers.get('Origin');
 if(origin && !ORIGINS.has(origin))return json({error:'Origin nicht erlaubt'},403);
 let response;
 try{response=request.method==='OPTIONS'?new Response(null,{status:204}):await handle(request,env);}catch(error){console.error(error);response=json({error:'Online-Speicher momentan nicht verfügbar. Bitte erneut versuchen.'},500);}
 const headers=new Headers(response.headers);
 if(origin){headers.set('Access-Control-Allow-Origin',origin);headers.set('Vary','Origin');}
 headers.set('Access-Control-Allow-Methods','GET, HEAD, PUT, POST, OPTIONS');headers.set('Access-Control-Allow-Headers','Authorization, Content-Type');headers.set('X-Content-Type-Options','nosniff');headers.set('Referrer-Policy','no-referrer');
 return new Response(response.body,{status:response.status,headers});
}};
