<template>
  <div>
    <div v-for="item in marks" :key="item.markId">
      <div class="item">
       {{item.siteTitle}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      marks:[]
    }
  },
  created(){
    axios.post('/queryMarks',{userName:this.$store.getters.getUser})
    .then((res)=>{
      this.marks=res.data
    })
  }
}
</script>

<style scoped>
.item{
  border-bottom:1px solid ;
}
</style>