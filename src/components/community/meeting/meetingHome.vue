<template>
  <div class="meetingHome">
    <div class="search">
      <div class="searchLeft">
          <el-select v-model="placesheng" filterable size="mini">
            <el-option
              v-for="item in sheng"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="placeshi" filterable size="mini">
            <el-option
              v-for="item in shi"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="placequ" filterable size="mini">
            <el-option
              v-for="item in qu"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button size="mini" type="primary" @click="search">查询</el-button>
        </div>
        <div class="searchRight">
          <el-button size="mini" type="primary" @click="toNewMeet">发起约球</el-button>
          </div>
      
    </div>
    <div class="meetingList">
      <div class="listHead"><strong>
        <ul>
          <li><div>主题</div>
          <div>地点</div>
          <div>约球时间</div>
          <div>约球人数</div></li>
          <!-- <div>状态</div> -->
        </ul></strong>        
      </div>
      <div class="listMain">
        <ul v-for="item in balls" :key="item.ballId">
          <li>
            <div><router-link :to="{name:'meeting',params:{ballId:item.ballId}}">
              {{item.ballTitle}}</router-link></div>
            <div>{{item.place}}</div>
            <div>{{item.ballTime}}</div>
            <div>{{item.ballPeople}}/{{item.ballLimit}}</div>
            <!-- <div>
              <el-button size="mini" type="primary">查看</el-button>
            </div> -->
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
  return{
    disabled:false,
    join:'参加',
    balls:[]
  }
},
methods:{
  toNewMeet(){
    this.$router.push('/newMeet')
  },
  search(){

  }
},
created(){
  axios.post('/getBalls',1)
  .then((res)=>{
    this.balls=res.data
  })
  },
  
}
</script>

<style scoped>
.searchLeft{
  float:left;
  width:80%;
  /* border: 1px solid; */
}
.searchRight{
  position: absolute;
  width: 10%;
  right: 15%;
  /* border: 1px solid; */
}
.meetingHome{
  margin-left:10%;
  height: 500px;
}
li{
  list-style: none;
  border-bottom: 1px dotted;
  height: 30px;
}
.search{
  width: 95%;
  height: 50px;
  position: relative;
  top: 8%;
}
.meetingList{
  margin-top: 3%;
  position: relative;
  right:3%
}
li div{
  width: 25%;
  height: 25px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 7%;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  color: red;
}
</style>