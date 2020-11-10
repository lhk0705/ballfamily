<template>
  <div>
      <el-row>
        <el-col :span='12'>
          <div class="area">
            <h3>西部</h3>
            <el-table :data="ratesW" border>
              <el-table-column prop="rate" label="排名" align="center" min-width="50%"></el-table-column>
              <el-table-column prop="teamName" label="队名" align="center"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="area">
            <h3>东部</h3>
            <el-table :data="ratesE" border>
              <el-table-column prop="rate" label="排名" align="center" min-width="50%"></el-table-column>
              <el-table-column prop="teamName" label="队名" align="center"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
   data(){
     return{
       ratesW:[],
       ratesE:[]
     }
   },
   methods:{
     getWest(){
       let data={
         league:'NBA',
         area:'W'
       }
       axios.post('/getRates',data)
       .then((res)=>{
          this.ratesW=res.data
          console.log(this.ratesW);
       }) 
       },
       getEast(){
       let data={
         league:'NBA',
         area:'E'
       }
       axios.post('/getRates',data)
       .then((res)=>{
          this.ratesE=res.data
          console.log(this.ratesE);
       }) 
       },     
     async fun(){
       await this.getEast();
       this.getWest()
     }
   },
   created(){
     this.fun()

   }
}
</script>

<style scoped>
.area{
  margin-left: 10%;
  /* border: 1px solid; */
}
</style>