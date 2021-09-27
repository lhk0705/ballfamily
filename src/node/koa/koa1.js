let Koa=require('koa')
let app=new Koa()
let router=require('koa-router')()

let bodyParser=require('koa-bodyparser')
app.use(bodyParser())

let cors=require('koa2-cors')
app.use(cors())

let match=require('../association/match');
let user=require('../user');
let query=require('./util')
let tokenSign=require('./tokenUtil').jwtSign

let tokenCheck=require('./tokenUtil').jwtCheck
app.use(tokenCheck)

let crypto=require('./crypto')


app.listen(3000,async(ctx,next)=>{
  console.log('koa已启动');
})



router.post('/getTodayMatch',async(ctx,next)=>{ 
  let data=[ctx.request.body.league,ctx.request.body.date];
  ctx.body=await query(match.queryToday,data)
});

router.post('/getUser',async(ctx,next)=>{ 
  // console.log(await query(user.queryAll));
  // let data=[ctx.request.body.userId,ctx.request.body.password];
  console.log(crypto.Decrypt(ctx.request.body.userId),crypto.Decrypt(ctx.request.body.password));
  let users=await query(user.queryAll)
  let result=users.filter(
    item => item.userId===ctx.request.body.userId && item.userId===ctx.request.body.userId)
    // console.log(result);
    if(result.length){
      ctx.response.set('token',tokenSign(ctx.request.body))
      ctx.body=tokenSign(ctx.request.body)
    }else{
      ctx.body=0
    }
  // ctx.body=await query(user.queryAll)
});

app.use(router.routes()).use(router.allowedMethods())
