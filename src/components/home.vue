<template>
  <div class="home">
    <div class="nba-news">
      <div class="nba-news-head"><strong>
        NBA快报</strong></div>
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
      <div class="nba-score">2</div>
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
  watch:{
    time(newV,oldV){

    }
  }
}
</script>

<style scoped>
.nba-news{
  margin:0 20px;
  height:400px;
  
}
.nba-img{
  margin-left: 40px;
  width: 300px;
  height: 250px;
  border: 1px solid black;
}
li{
  list-style: none;
  float: left;
}
.nba-score{
  float: right;
}
.nba-news-head{
  text-align: left;
  border: 1px solid rgb(141, 140, 140);
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
.img1{
  /* visibility: hidden; */
} 
</style>