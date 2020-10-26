<template>
<div class="head">
  <div class="fst-head">
    <div class="logo">
      <img src="./篮球LOGO.jpg" width="120px" height="120px" alt="">
    </div> 
    <div class="user"> 
      <span><strong>欢迎进入篮球世界！   {{user}}</strong></span>      
      <router-link to='/'>[退出]</router-link>
    </div>
    
  </div>
  <div >
      <ul class="sec-head">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/nba">NBA</router-link>
        </li>
        <li>
          <router-link to="/cba">CBA</router-link>
        </li>
        <li>
          <router-link to="/community">社区</router-link>
        </li>
        <li>
          <router-link to="/education">教学专区</router-link>
        </li>
        <li>
          <router-link to="/bussiness">周边商城</router-link>
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
  background-color: rgb(201, 201, 201);
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
</style>