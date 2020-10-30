<template>
  <div class="newBbs">
    <div class="newBbs_block">
    <div class="label"><label >标题:</label></div>
    <div class="input">
    <el-input size="mini" v-model="siteTitle"></el-input></div>
    </div>
    <div class="newBbs_content">
      <div class="label"><label >内容:</label></div>
      <div class="text">
        <textarea cols="100" rows="10" v-model="siteContent" placeholder="200字以内">
          </textarea></div>     
    </div>
  <div class="newBbsBtn"><el-button type="primary" @click="submit">发帖</el-button></div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
  return{
    siteTitle:'',
    siteContent:''
  }
},
methods:{
  submit(){
    let data={
      siteId:this.$store.getters.getSiteId,
      siteTitle:this.siteTitle,
      siteContent:this.siteContent,
      siteTime:'2020-10-31',
      userName:'henry'
    };
    axios.post('/addBbs',data)
    .then((res)=>{
      console.log(data);
      this.$store.commit('addSite')
    })
    
  }
}
}
</script>

<style scoped>
.newBbs{
  width: 80%;
  margin:3%;
  height: 250px;
}
.newBbs_block{
  margin: 5% 0;
  height: 20px;
}
.input{
  width:50%;
  float: left;
  margin-left: 3%;
}
.label{
  float: left;
  margin-left: 5%;
}
.newBbs_content{
  margin: 5% 0;
  height: 130px;
}
.text{
  position: absolute;
  left:21%
}

</style>