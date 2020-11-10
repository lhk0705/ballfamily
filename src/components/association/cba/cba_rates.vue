<template>
  <div>
      <el-row>
        <el-col :span='12'>
          <div class="area">
            <h3>南区</h3>
            <el-table :data="ratesS" border>
              <el-table-column prop="rate" label="排名" align="center" min-width="50%"></el-table-column>
              <el-table-column prop="teamName" label="队名" align="center"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="area">
            <h3>北区</h3>
            <el-table :data="ratesN" border>
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
       ratesS:[],
       ratesN:[]
     }
   },
   methods:{
     getSouth(){
       let data={
         league:'CBA',
         area:'S'
       }
       axios.post('/getRates',data)
       .then((res)=>{
          this.ratesS=res.data;
          console.log(this.ratesS);
       }) 
       },
       getNorth(){
       let data={
         league:'CBA',
         area:'N'
       }
       axios.post('/getRates',data)
       .then((res)=>{
          this.ratesN=res.data
          console.log(this.ratesN);
       }) 
       },     
     async fun(){
       await this.getSouth();
       this.getNorth()
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