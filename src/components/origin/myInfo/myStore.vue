<template>
  <div class="newStore">
    您还没有店铺
    <el-button @click="newStorebtn" size=mini>创建店铺</el-button>
    <br>
    <br>

    <div :style='newStore'>
      店名：<el-input size=mini v-model="storeName"></el-input>
      <br>
      <el-button @click="create" size=mini>创建</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
  return {
    newStore:{visibility:'hidden'},
    storeName:''
  }
},
methods:{
  newStorebtn(){
    this.newStore.visibility='visible'
  },
  create(){
    let data={
      storeId:this.$store.getters.getStore,
      userName:this.$store.getters.getUser,
      storeName:this.storeName
    }

    axios.post('/addStore',data)
    .then((res)=>{
      this.$store.commit('addStore')
    })
  }
}
}
</script>

<style scoped>
.newStore{
  text-align:center
}
.newStore div{
  width: 50%;
  margin:0 auto
}
</style>