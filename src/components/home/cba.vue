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
          <img src="./cba3.png" width="300px" 
          height="250px" alt="" class="img3" :style='vis3'>       
      </div>
      <div class="cba-score">
        <h3>今日CBA比分</h3>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    this.timeplus()
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
    }
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


</style>