<template>
  <div>
      <el-row>
        <el-col :span='12'>
          <div class="area">
            <h3>南区</h3>
            <el-table :data="rates" border>
              <el-table-column prop="rate" label="排名" align="center" min-width="50%"></el-table-column>
              <el-table-column prop="team" label="队名" align="center"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="area">
            <h3>北区</h3>
            <el-table :data="rates" border>
              <el-table-column prop="rate" label="排名" align="center" min-width="50%"></el-table-column>
              <el-table-column prop="team" label="队名" align="center"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
   data(){
     
   }
}
</script>

<style scoped>
.area{
  margin-left: 10%;
  /* border: 1px solid; */
}
</style>