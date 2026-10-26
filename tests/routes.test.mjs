import {test} from 'node:test'
import assert from 'node:assert/strict'
import {spawn} from 'node:child_process'
import {once} from 'node:events'

// 使用真实生产服务验证双语路由及媒体；只停止本测试创建的进程。
test('生产服务：全部双语页面、404 和本地素材',{timeout:120000},async()=>{
  const port=43568,origin='http://127.0.0.1:'+port
  const server=spawn(process.execPath,['scripts/next.mjs','start'],{env:{...process.env,PORT:String(port),HOSTNAME:'127.0.0.1'},stdio:['ignore','pipe','pipe']})
  let log='';server.stdout.on('data',chunk=>{log+=chunk});server.stderr.on('data',chunk=>{log+=chunk})
  try{
    let ready=false
    for(let attempt=0;attempt<80;attempt++){if(server.exitCode!==null)throw new Error(log);try{const response=await fetch(origin);if(response.ok){ready=true;break}}catch(error){if(error.cause?.code!=='ECONNREFUSED')throw error}await new Promise(resolve=>setTimeout(resolve,250))}
    assert.ok(ready,'Production server did not become ready: '+log)
    const slugs=['','home-2','about','waitlist','changelog','faqs','contact','legal-pages/privacy-policy','legal-pages/terms-conditions']
    for(const locale of ['','en/'])for(const slug of slugs){const path='/'+locale+slug;const response=await fetch(origin+path);assert.equal(response.status,200,path);const html=await response.text();assert.ok(html.includes('hl-main'),path);for(const url of new Set([...html.matchAll(/(?:src|href)="(\/templates\/habitline\/[^"?]+)(?:\?[^"]*)?"/g)].map(match=>match[1]))){const asset=await fetch(origin+url);assert.equal(asset.status,200,path+' asset '+url)}}
    assert.equal((await fetch(origin+'/missing-page')).status,404)
  }finally{server.kill('SIGTERM');if(server.exitCode===null)await once(server,'exit')}
})
