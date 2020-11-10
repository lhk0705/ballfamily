<template>
  <div>
    <ul v-for=" item in show" :key="item.matchId">
      <li>{{item.matchTime}}
        <br>
        第{{item.rounds}}轮
        {{item.host}}VS{{item.guest}}
      </li>
    </ul>
    <div>第&nbsp;&nbsp;{{pageNum}}&nbsp;&nbsp;页</div>
    <div class="page">
        <div @click="turn(1)" >1</div>
        <div @click="turn(2)" >2</div>
        <div @click="turn(3)" >3</div>
        <div @click="turn(4)" >4</div>
        <div @click="turn(5)" >5</div>
        <div @click="turn(6)" >6</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
  matches:[],
  show:[],
  pageNum:1
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
        this.show=res.data.slice(0,5)
      })
    },
    turn(n){
      // console.log(this.matches);
      let x=(n-1)*5
      let y=(n-1)*5+5
      let pageShow=this.matches
      // console.log(x,y);
      this.show=pageShow.slice(x,y);
      // console.log(this.show);
      this.pageNum=n
    }
  },
}
</script>

<style scoped>
li{
  list-style: none;
  border-bottom: 1px solid rgb(196, 194, 194);
}
.page{
  display: flex;
  /* width: 30%; */
  height: 30px;
  border: solid 1px;
  position: absolute;
  right: 5%;
  border-right: none;
}
.page div{
  width: 30px;
  height: 100%;
  border-right: solid 1px ;
  background: rgb(196, 194, 194);
}
.page div:hover{
  cursor: pointer;
  background: white;
}
</style>