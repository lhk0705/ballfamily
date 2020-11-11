var express=require('express');
var connection=require('./ballSql');
var connectBus=require('./businessSql')
var app=express();
var bp=require('body-parser');
app.use(bp.json());
var cors=require('cors');
app.use(cors());
var user=require('./user');
var match=require('./association/match');
var players=require('./association/players');
var teams=require('./association/teams');
var balls=require('./community/ballMeet/balls');
var joinBall=require('./community/ballMeet/joinBall');
var comments=require('./community/bbs/comments');
var sites=require('./community/bbs/sites');
var marks=require('./community/bbs/marks');
var chartItems=require('./business/chartItems');
var charts=require('./business/charts');
var evaluates=require('./business/evaluates');
var items=require('./business/items');
var orderItems=require('./business/orderItems');
var orders=require('./business/orders');
var stores=require('./business/stores');


connection.connect();
connectBus.connect();
app.listen(8089,(req,res)=>{
    console.log("验证程序已启动");
});

// NBA/CBA
app.post('/getTodayMatch',(req,res)=>{
    let data=[req.body.league,req.body.date];
    connection.query(match.queryToday,data,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    })
});
app.post('/getAllMatch',(req,res)=>{
    connection.query(match.queryAll,req.body.league,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
// sites表
app.post('/getAllBbs',(req,res)=>{
    connection.query(sites.queryAll,req.body,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/getBbsbyid',(req,res)=>{
    connection.query(sites.queryById,req.body.siteId,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/queryCommentsByName',(req,res)=>{
    connection.query(comments.queryCommentsByUsername,req.body.userName,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/queryComments',(req,res)=>{
    connection.query(sites.queryComments,req.body.siteId,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/addBbs',(req,res)=>{
    let data=[
        req.body.siteId,
        req.body.siteTitle,
        req.body.siteContent,
        req.body.siteTime,
        req.body.userName,0,0,0
    ]
    connection.query(sites.insert,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/commentQuantity',(req,res)=>{
    let data=[
        req.body.commentQuantity,
        req.body.siteId       
    ]
    connection.query(sites.updateComment,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/shareQuantity',(req,res)=>{
    let data=[
        req.body.shareQuantity,
        req.body.siteId       
    ]
    connection.query(sites.updateShare,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/markQuantity',(req,res)=>{
    let data=[
        req.body.markQuantity,
        req.body.siteId       
    ]
    connection.query(sites.updateMark,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/addComment',(req,res)=>{
    let data=[
        req.body.commentId,
        req.body.siteId,
        req.body.siteTitle,
        req.body.commentTime,
        req.body.commentContent,
        req.body.userName
    ]
    connection.query(comments.insert,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/querySites',(req,res)=>{
    connection.query(sites.queryByName,req.body.userName,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
// balls表
app.post('/getBalls',(req,res)=>{
    connection.query(balls.queryAll,req.body,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/getBallById',(req,res)=>{
    connection.query(balls.queryById,req.body.ballId,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/getBallersById',(req,res)=>{
    connection.query(joinBall.queryBallers,req.body.ballId,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/addBall',(req,res)=>{
    let data=[
        req.body.ballId,
        req.body.ballTitle,
        req.body.place,
        req.body.ballTime,
        req.body.ballPeople,
        req.body.ballLimit,
        req.body.ballComments,
        req.body.ballCreater,
    ]
    connection.query(balls.insert,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/addJoin',(req,res)=>{
    let data=[
        req.body.joinId,
        req.body.ballId,
        req.body.userName
    ]
    connection.query(joinBall.insert,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/updatePeople',(req,res)=>{
    let data=[
        req.body.ballPeople,
        req.body.ballId
    ]
    connection.query(balls.updatePeople,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/queryBalls',(req,res)=>{
    connection.query(balls.queryByName,req.body.userName,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
// mark表
app.post('/markInsert',(req,res)=>{
    let data=[
        req.body.markId,
        req.body.userName,
        req.body.siteTitle,
    ]
    connection.query(marks.insert,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/queryMarks',(req,res)=>{
    connection.query(marks.queryByName,req.body.userName,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        } 
    })
})
// user表
app.post('/getUser',(req,res)=>{
    connection.query(user.queryAll,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/addUser',(req,res)=>{
    let data=[
        req.body.userId,
        req.body.password,
        req.body.userName,
        req.body.birthday,
    ]
    connection.query(user.insert,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/queryUser',(req,res)=>{
    connection.query(user.queryByName,req.body.userName,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
// teams表
// 快排返回排名表
app.post('/getRates',(req,res)=>{
    let data=[
        req.body.league,
        req.body.area
    ]
    connection.query(teams.queryRates,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            for(let i=1;i<result.length;i++){
                for(let j=0;j<result.length-1;j++){
                    if(result[j].rate>result[j+1].rate){
                        let temp=result[j]
                        result[j]=result[j+1]
                        result[j+1]=temp
                    }
                }
            }
            res.send(result)
        }
    })
})

// stores表
app.post('/getMyStore',(req,res)=>{
    connectBus.query(stores.queryByName,req.body.userName,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
app.post('/addStore',(req,res)=>{
    let data=[
        req.body.storeId,
        req.body.userName,
        req.body.storeName,
        
    ]
    connectBus.query(stores.insert,data,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.post('/getStoreByName',(req,res)=>{
    connectBus.query(stores.queryByStoreName,req.body.storeName,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
app.post('/getAllStores',(req,res)=>{
    connectBus.query(stores.queryAll,req.body,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})