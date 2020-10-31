var express=require('express');
var connection=require('./mysql');
var app=express();
var bp=require('body-parser');
app.use(bp.json());
var cors=require('cors');
app.use(cors());
var user=require('./user');
var match=require('./association/match');
var players=require('./association/players');
var team=require('./association/teams');
var balls=require('./community/ballMeet/balls');
var joinBall=require('./community/ballMeet/joinBall');
var comments=require('./community/bbs/comments');
var marks=require('./community/bbs/marks');
var sites=require('./community/bbs/sites');

connection.connect();
app.listen(8089,(req,res)=>{
    console.log("验证程序已启动");
});

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
