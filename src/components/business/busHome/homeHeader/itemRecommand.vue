<template>
  <div class="itemRec">
      <div :style="img1"><img src="../img/卫衣.png" alt="" ></div>
      <div :style="img2"><img src="../img/球鞋.png" alt=""></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img1:{display:'none'},
      img2:{display:'block'},
      time:0
    }
  },
  methods:{
    change(){
      setTimeout(() => {
      if(this.time===1)
      {this.time=0}
      else{this.time++;}
    }, 3000)
  }
  },
  watch:{
    time(newV){
      if(newV===1){
        this.change()      
        this.img1.display='block'
        this.img2.display='none'
      }else{
        this.change()
        this.img1.display='none'
        this.img2.display='block'
      }
    }
  },
  created(){
    this.change()
  }
}
</script>

<style scoped>
.itemRec div{
  width: 100%;
  height: 100%;
}
img{
  width: 100%;
  height: 100%;
}
</style>