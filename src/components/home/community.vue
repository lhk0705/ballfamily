<template>
  <div class="home">
    <div class="nba-news">
      <div class="nba-news-head"><h2>社区最新动态</h2>
        </div>
      <br>
      <div class="nba-news-foot">
      <div class="nba-img"> 
          <h3>近期约球</h3>
          <ul v-for="item in balls" :key="item.ballId">
          <li>
           <router-link :to="{name:'meeting',params:{ballId:item.ballId}}"><strong>{{item.ballTitle}}</strong></router-link>               
          </li>
        </ul>
      </div>
      <div class="nba-score">
        <h3>最热帖子</h3>
        <ul v-for="item in sites" :key="item.siteId">
          <li>
           <router-link :to="{name:'bbs',params:{siteId:item.siteId}}"><strong>{{item.siteTitle}}</strong></router-link>               
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
      sites:[],
      balls:[]
    }
  },
  created(){    
   this.GETBALLS();
   this.GETSITES()
  },
  methods:{
   GETBALLS(){
       axios.post('/getBalls',1)
       .then((res)=>{
        let result=res.data;      
        for(let i=0;i<result.length-1;i++){
        for(let j=0;j<result.length-1;j++){
           if(result[j].ballTime<result[j+1].ballTime){
             let temp=result[j]
             result[j]=result[j+1]
             result[j+1]=temp
           }
        }
      }
      this.balls=result.slice(0,5)
    //   console.log(this.sites);
       })
   },
   GETSITES(){
       axios.post('/getAllBbs',1)
       .then((res)=>{
           let result=res.data;      
      for(let i=0;i<result.length-1;i++){
        for(let j=0;j<result.length-1;j++){
           if(result[j].commentQuantity<result[j+1].commentQuantity){
             let temp=result[j]
             result[j]=result[j+1]
             result[j+1]=temp
           }
        }
      }
      this.sites=result.slice(0,5)
       })
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
  width: 300px;
  height: 250px;
  border: 1px solid black;
  float: left;
}
li{
  list-style: none;
  float: left;
  text-align: left;
}
.nba-score{
  position: absolute;
  right:10%;
  border: 1px solid black;
  width: 300px;
  height:250px;
  
}
.nba-news-head{
  text-align: left;
  border-bottom: 1px solid rgb(141, 140, 140);
  height:30px;
  display: flex;
  align-items: center;
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
a{
    text-decoration: none;
    color:rgb(70, 69, 69)
}
a:hover{
    color:rgb(243, 74, 74)
}

</style>