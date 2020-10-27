<template>
  <div>
    <ul v-for=" item in matches" :key="item.matchId">
      <li>{{item.matchTime}}
        <br>
        第{{item.rounds}}轮
        {{item.host}}VS{{item.guest}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
return{
  matches:[]
}
  },
  created(){
    this.getAllMatch()
  },
  methods:{
    getAllMatch(){
      axios.post('/getAllMatch',{league:'NBA'})
      .then((res)=>{
        
        this.matches=res.data
      })
    },
  }
}
</script>

<style scoped>
li{
  list-style: none;
  border-bottom: 1px solid rgb(196, 194, 194);
}
</style>