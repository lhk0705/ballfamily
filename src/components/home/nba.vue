<template>
  <div class="home">
    <div class="nba-news">
      <div class="nba-news-head"><h2>NBA快报</h2>
        </div>
      <br>
      <div class="nba-news-foot">
      <div class="nba-img"> 
        <div :visibility="vis1">      
          <img src="./nba1.png" width="300px" 
          height="250px" alt="" class="img1"  :style='vis1'>
          </div> 
          <div :visibility="vis2">
          <img src="./nba2.png" width="300px" 
          height="250px" alt="" class="img2" :style='vis2'>
          </div>
          <img src="./nba3.png" width="300px" 
          height="250px" alt="" class="img3" :style='vis3'>       
      </div>
      <div class="nba-score">
        <h3>今日NBA比分</h3>
        <ul v-for="item in todayMatches" :key="item.matchId">
          <li>
            <strong>{{item.host}}</strong> &nbsp;&nbsp;{{item.hostScore}} 
               <strong>:</strong>  {{item.guestScore}}<strong>&nbsp;&nbsp;{{item.guest}}</strong>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      vis1:'visibility:visible',
      vis2:'visibility:hidden',
      vis3:'visibility:hidden',
      time:0
    }
  },
  created(){    
    this.timeplus();
    this.getMatch()
  },
  methods:{
    changevis2(){      
        this.vis1='visibility:hidden';
        this.vis2='visibility:visible';
        this.vis3='visibility:hidden'     
    },
    changevis1(){  
        this.vis1='visibility:visible';
        this.vis2='visibility:hidden';
        this.vis3='visibility:hidden'      
    },
    changevis3(){      
        this.vis1='visibility:hidden';
        this.vis2='visibility:hidden';
        this.vis3='visibility:visible'      
    },
    timeplus(){
        setTimeout(()=>{
        if(this.time===2){this.time=0}
        else{this.time++;}
        },3000)
    },
    getMatch(){
      axios.post('/getTodayMatch',{league:'NBA',date:'2020-10-24'})
      .then((res)=>{
        // console.log(res.data);
        this.todayMatches=res.data
      })
    },
  },
  watch:{
    time(newV,oldV){
      if(newV===1){
        this.changevis2();
        this.timeplus()
      }
      else if(newV===2){
        this.changevis3();
        this.timeplus()
      }
      else{
        this.changevis1();
        this.timeplus()
      }
    }
  }
}
</script>

<style scoped>
.nba-news{
  margin:0 5%;
  height:400px;
  position: relative;
  
}
.nba-img{
  margin-left: 10%;
  width: 31%;
  height: 250px;
  border: 1px solid black;
  float: left;
}
li{
  list-style: none;
  float: left;
}
.nba-score{
  position: absolute;
  right:10%;
  border: 1px solid black;
  width: 31%;
  height:250px;
  
}
.nba-news-head{
  text-align: left;
  border: 1px solid rgb(141, 140, 140);
  height:30px;
  display: flex;
  align-items: center;
}
.img2{
  position: relative;
  bottom:255px;
  /* visibility: hidden; */
}
.img3{
  position: relative;
  bottom:508px;
}
ul{
  /* margin:0 5% */
  margin-right:30%
}
li{
  list-style: none;
  width: 130%;
  border-bottom:1px solid black;
  margin: 5px;
}


</style>