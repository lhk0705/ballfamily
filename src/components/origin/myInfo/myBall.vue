<template>
  <div>
    <div v-for="item in balls" :key="item.ballId">
      <div class="item">
       {{item.ballTitle}}
       {{item.place}}
       {{item.ballTime}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      balls:[]
    }
  },
  created(){
    axios.post('/queryBalls',{userName:this.$store.getters.getUser})
    .then((res)=>{
      this.balls=res.data
    })
  }
}
</script>

<style scoped>
.item{
  border-bottom:1px solid ;
}
</style>