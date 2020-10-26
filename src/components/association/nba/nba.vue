<template>
  <div >
    <div>今日战况</div>
    <div class="nba_score_today">
      <ul v-for="item in matches" :key="item.matchId">
        <li>
          <div>{{item.host}} VS {{item.guest}}</div>
        <div>分数 VS 分数</div>
        </li>

      </ul>
    </div>
    <br>
    <div class="nba_info">
      <el-row>
        <el-col :span='4'>
          <el-menu
          default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router=true>
            <el-menu-item index='/nba_matches'>赛程安排</el-menu-item>
            <el-menu-item index='/nba_rates'>排名情况</el-menu-item>
            <el-menu-item index='/nba_films'>精彩回放</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span='16'>
            <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      matches:[{
        host:'火箭',
        guest:'湖人',
        matchId:1
      }]
    }
  }
}
</script>

<style scoped>
.nba_score_today li{
  list-style: none;
  float: left;
  border:1px solid black
}
.nba_score_today{
  
  height:100px
}
</style>