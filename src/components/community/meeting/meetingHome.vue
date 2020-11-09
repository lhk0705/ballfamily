<template>
  <div class="meetingHome">
    <div class="search">
      <div class="searchLeft">
          <label >主题</label>
          <el-input size="mini" style="width:20%"  v-model="searchTitle"></el-input>
          <label>地点</label>
          <el-input size="mini" style="width:20%"  v-model="searchPlace"></el-input>
          <label>约球时间</label>
          <el-date-picker
        size="mini"
        value-format="yyyy-MM-dd"
        v-model="ballTime"
        type="date"
        style="width:20%" 
          ></el-date-picker>
          <el-button size="mini" type="primary" style="width:10%" @click="search">查询</el-button>
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
    balls:[],
    searchTitle:'',
    searchPlace:'',
    searchTime:''
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
  /* position: absolute; */
  width: 20%;
  float: right;
  /* right: 15%; */
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
  margin-top: 4%;
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