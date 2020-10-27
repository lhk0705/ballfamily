<template>
  <div>
    <ul v-for=" item in matches" :key="item.matchId">
      <li>{{item.matchTime}}
        <br>
        {{item.rounds}}
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
      axios.post('/getAllMatch',{league:'CBA'})
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
}
</style>