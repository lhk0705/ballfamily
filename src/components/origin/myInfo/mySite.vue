<template>
  <div>
    <div v-for="item in sites" :key="item.siteId">
        <div>
          标题：{{item.siteTitle}}
          <div class="right"></div>{{item.siteTime}}
          </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
      return{
        sites:[]
      }
    },
    created(){
      axios.post('/querySites',{userName:this.$store.getters.getUser})
    .then((res)=>{
        this.sites=res.data
    })
    }
}
</script>

<style>

</style>