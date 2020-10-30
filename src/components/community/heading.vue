<template>
<div>
  <div class="community">
      <div class="logo">
          <div class="baller"><h2>球友社区</h2></div>
          <div class="baller_span" ><strong>聊球、约球两不误！</strong></div>
          </div>
          <div class="community_choise">
              <router-link to="/bbsHome" :style="bbsHome">论坛首页
              </router-link>
              /
              <router-link to="/meetingHome" :style="meetingHome">约球
             </router-link>
          </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            bbsHome:{border:'1px solid'},
            meetingHome:{
                border:'1px solid'
                
                }
        }
    }
}
</script>

<style scoped>
.community{
    width:70%;
    height:50px;
    margin: 0 auto;
    border-bottom: 1px solid;
}
.baller{
    float: left;
    width: 40%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    
    background-color: rgb(188, 223, 243);
}
.baller_span{
    float: left;
    position: relative;
    top: 60%;
}
.logo{
    float: left;
    width: 60%;
    height: 50px;
}
.community_choise{
    float: right;
    position: relative;
    top: 60%;
    margin-right: 1%;
}
a{
    border:'1px solid';
    text-decoration:none;
    color: rgb(110, 174, 214);
    border-radius:4px
}
a:hover{
    color:rgb(243, 138, 138)
}

</style>