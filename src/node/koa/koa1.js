let Koa=require('koa')
let app=new Koa()

let router=require('koa-router')()

let bodyParser=require('koa-bodyparser')
app.use(bodyParser())

let cors=require('koa2-cors')
app.use(cors())

let match=require('../association/match');

let query=require('./util')

app.listen(3000,async(ctx,next)=>{
  console.log('koa已启动');
})

router.post('/getTodayMatch',async(ctx,next)=>{ 
  let data=[ctx.request.body.league,ctx.request.body.date];
  ctx.body=await query(match.queryToday,data)
});

app.use(router.routes()).use(router.allowedMethods())
