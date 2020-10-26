<template>
  <div >
    <div><strong>今日战况</strong>
      </div>
    <div class="nba_score_today">
      <ul v-for="item in todayMatches" :key="item.matchId">
        <li>        
          <div class="host">{{item.host}} <br> {{item.hostScore}}</div> 
          <h3 class="VS">VS</h3>         
        <div class="guest">  {{item.guest}} <br>  {{item.guestScore}}</div>
        </li>
      </ul>
    </div>
    
    <div class="nba_info">
      <el-row >
        <el-col :span='4' >
          <div class="nba_col1">
          <el-menu
          default-active="/nba_matches"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"       
        router=true>
            <el-menu-item index='/nba_matches'>赛程安排</el-menu-item>
            <el-menu-item index='/nba_rates'>排名情况</el-menu-item>
            <el-menu-item index='/nba_films'>精彩回放</el-menu-item>
          </el-menu>
          </div>
        </el-col>
        <el-col :span='16' class="show">
          
            <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      todayMatches:[],
    }
  },
  created(){
    this.getMatch()
  },
  methods:{
    getMatch(){
      axios.post('/getTodayMatch',{league:'NBA',date:'2020-10-24'})
      .then((res)=>{
        // console.log(res.data);
        this.todayMatches=res.data
      })
    },
    
    handleOpen(){

    },
    handleClose(){}
  }
}
</script>

<style scoped>
.nba_info{
  margin:10px 10px;
  height:400px;
  overflow: auto;
}
.nba_score_today{
  /* border-top:1px solid black; */
  display:flex;
  border-bottom:1px solid black;
  overflow:auto;
}
.nba_score_today li{
  list-style: none;
  float: left;
  border:1px solid black;
  width:250px;
  height:70px;
  display: flex;
  align-items: center;  
  position: relative;
  bottom:10px;
}
.host{
  position: absolute;
  left: 10px;
  float: left;
  width: 100px;
  /* border:1px solid black */
}
.guest{
  position: absolute;
  width: 100px;
  right:10px;
  /* border:1px solid black */
}
.nba_score_today{ 
  height:100px
}
.VS{
  position:relative;
  left:110px
}


 
</style>