<template>
  <div class="home">
    <div class="cba-news">
      <div class="cba-news-head"><h2>
        CBA快报</h2></div>
      <br>
      <div class="cba-news-foot">
      <div class="cba-img"> 
        <div :visibility="vis1">      
          <img src="./cba1.png" width="300px" 
          height="250px" alt="" class="img1"  :style='vis1'>
          </div> 
          <div :visibility="vis2">
          <img src="./cba2.png" width="300px" 
          height="250px" alt="" class="img2" :style='vis2'>
          </div>
          <img :src="img3" width="300px" 
          height="250px" alt="" class="img3" :style='vis3'>       
      </div>
      <div class="cba-score">
        <h3>今日CBA比分</h3>
        <ul v-for="item in todayMatches" :key="item.matchId">
          <li>
            <strong>{{item.host}}</strong> &nbsp;&nbsp;{{item.hostScore}} 
               <strong>:</strong>  {{item.guestScore}}<strong>&nbsp;&nbsp;{{item.guest}}</strong>
          </li>
        </ul>
      </div>
      <div>
        <!-- {{img}} -->
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
      time:0,
      img3:''
    }
  },
  created(){    
    this.timeplus();
    this.getMatch();
    
  },
  mounted(){
    this.getPic()
  },
  methods:{
    getPic(){
      axios.get('/getPic',{ responseType: 'arraybuffer' }).then((res)=>{
        // console.log(`data: image/jpeg;base64,${btoa(new Uint8Array(res.data[0]).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`);
        this.img3=`data:image/png;base64,${btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
        // this.img3=`data:image/png;base64,${btoa(new Uint8Array(res.data[1]).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`
      })
    },
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
      axios.post('/getTodayMatch',{league:'CBA',date:'2020/11/7'})
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
.cba-news{
  margin:0 5%;
  height:400px;
  position: relative;
  
}
.cba-img{
  margin-left: 10%;
  width: 300px;
  height: 250px;
  border: 1px solid black;
  float: left;
}
li{
  list-style: none;
  float: left;
}
.cba-score{
  position: absolute;
  right:10%;
  border: 1px solid black;
  width: 300px;
  height:250px
}
.cba-news-head{
  text-align: left;
  border-bottom: 1px solid rgb(141, 140, 140);
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