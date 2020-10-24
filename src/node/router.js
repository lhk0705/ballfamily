var express=require('express');
var connection=require('./mysql');
var app=express();
var bp=require('body-parser');
app.use(bp.json());
var user=require('./user');
var match=require('./association/match');
var players=require('./association/players');
var team=require('./association/teams')
var cors=require('cors');
app.use(cors());
connection.connect();
app.listen(8089,(req,res)=>{
    console.log("验证程序已启动");
});



