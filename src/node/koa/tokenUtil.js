let jwt=require('jsonwebtoken')//导入jwt

module.exports={
    jwtSign:(user)=>{
    return jwt.sign(user,'sdsds')
},
    jwtCheck: async (ctx,next)=>{
        // 过滤登录和注册页面
        if(ctx.url==='/login' ||ctx.url==='/register'){
            // 执行下一步
            await next()
        }else{
            if(ctx.header.authorization){
               console.log(await jwt.verify(ctx.header.authorization,'sdsds'));
            if(await jwt.verify(ctx.header.authorization,'sdsds')) {
                 // 执行下一步
                await next()
       }  
        }  
        }
                 
    }
}