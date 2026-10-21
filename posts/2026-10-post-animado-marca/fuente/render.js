const { chromium } = require('playwright');
const path=require('path');
(async()=>{
  const [,, mode, out] = process.argv;
  const b = await chromium.launch();
  const pg = await b.newPage({viewport:{width:1080,height:1350}});
  await pg.goto('file://'+path.join(__dirname,'index.html')+'?render');
  await pg.evaluate(()=>document.fonts.ready);
  await pg.waitForTimeout(500);
  const fps=30, dur=await pg.evaluate(()=>window.DUR);
  const times = mode==='check' ? [0.6,1.6,2.8,4.6,5.85,7.0,8.4,10.0,11.5,12.2,13.6,14.5,16.5] : [...Array(Math.round(dur*fps)).keys()].map(i=>i/fps);
  const st = await pg.$('#stage');
  for (let i=0;i<times.length;i++){
    await pg.evaluate(t=>window.render(t), times[i]);
    await st.screenshot({path:`${out}/f${String(i).padStart(4,'0')}.${mode==='check'?'png':'jpg'}`, ...(mode==='check'?{}:{type:'jpeg',quality:95})});
  }
  await b.close();
})();
