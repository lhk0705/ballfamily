<template>
<div class="head">
  <div class="fst-head">
    <div class="logo"><router-link to="/"><img src="./篮球LOGO.jpg" width="120px" height="120px" alt=""></router-link>
      
    </div> 
    <div class="user"> 
      <span><strong>欢迎进入篮球世界！   {{user}}</strong></span>      
      <router-link to='/'>[退出]</router-link>
    </div>
    
  </div>
  <div >
      <ul class="sec-head">
        <li>
          <router-link to="/"><strong>首页</strong>
          </router-link>
        </li>
        <li>
          <router-link to="/nba"><strong>NBA</strong></router-link>
        </li>
        <li>
          <router-link to="/cba"><strong>CBA</strong></router-link>
        </li>
        <li>
          <router-link to="/community"><strong>社区</strong></router-link>
        </li>
        <li>
          <router-link to="/education"><strong>教学专区</strong></router-link>
        </li>
        <li>
          <router-link to="/bussiness"><strong>周边商城</strong></router-link>
        </li>
      </ul>
      </div> 
  </div>
</template>
 
<script>
export default {
data(){
  return{
    user:'henry'
  }
}
}
</script>

<style scoped>

.head{ 
  height:160px ;
  border-bottom:3px solid rgb(184, 183, 183);
  border-radius:4px
}
.fst-head{
  /* margin:0 100px; */
  height:120px ;
  border-bottom:1px solid black;
  background-color: rgb(192, 216, 243);
  color: rgb(252, 249, 249);
}
.logo{
  float:left;
}
.user{
  float:right;
  position: relative;
  right: 50px;
  top: 80px;
}
.sec-head li{
  float: left;
  width: 100px;
  height: 20px;
  margin:0 2%;
  list-style: none;
  cursor: pointer;
  color: black;
   border-right:1px solid ;
   padding-right: 30px;
   
  
}
a{
  text-decoration: none;
  color:black;
}
a:hover{
  color: rgb(0, 153, 255);
}
</style>