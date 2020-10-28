<template>
<div>
  <div class="community">
      <div class="logo">
          <div class="baller"><h2>球友社区</h2></div>
          <div class="baller_span"><strong>聊球、约球两不误！</strong></div>
          </div>
          <div class="community_choise">
              <router-link to="/bbsHome">论坛首页</router-link>
              /
              <router-link to="/meetingHome">约球</router-link>
          </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.community{
    width:70%;
    height:50px;
    /* border-bottom: 1px solid rgb(22, 22, 22); */
    margin: 0 auto;
    background-color: rgb(218, 216, 216);
}
.baller{
    float: left;
    width: 40%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    border: 1px solid;
}
.baller_span{
    float: left;
    /* border: 1px solid; */
    margin-top: 6%;
}
.logo{
    float: left;
    width: 60%;
    
}
.community_choise{
    float: right;
    margin-top: 4%;
    margin-right: 1%;
}
a{
    list-style: none;
    text-decoration: none;
    color: blue;
}
</style>