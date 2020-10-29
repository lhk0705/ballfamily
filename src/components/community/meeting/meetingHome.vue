<template>
  <div class="meetingHome">
    <div class="search">
      dadad
    </div>
    <div class="meetingList">
      <div class="listHead"><strong>
        <div>主题</div>
        <div>地点</div>
        <div>时间</div>
        <div>约球人数</div>
        <div>状态</div></strong>
      </div>
      <div class="listMain">
        <ul v-for="item in ballList" :key="item.ballId">
          <li>
            <div><router-link :to="{name:'meeting',params:{ballId:item.ballId}}">
              {{item.ballTitle}}</router-link></div>
            <div>{{item.place}}</div>
            <div>{{item.ballTime}}</div>
            <div>{{item.ballPeople}}/{{item.ballLimit}}</div>
            <el-button size="mini" type="primary" :disabled="disabled">{{join}}</el-button>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    disabled:false,
    join:'参加',
    ballList:[
      {
      ballId:0,
      ballTitle:'来人呀！打球不啊啊',
      place:'天河体育中心',
      ballTime:'2020-10-25',
      ballPeople:4,
      ballLimit:4
    }
    ]
  }
},

}
</script>

<style scoped>
.meetingHome{
  margin-left:10%;
}
li{
  list-style: none;
  border-bottom: 1px dotted;
  margin-right: 1%;
}
.search{
  width: 95%;
  height: 50px;
  /* border:1px solid */
}
.meetingList{
  width: 95%;
  /* border:1px solid */
}
.listHead div,li div{
  width: 20%;
  height: 25px;
  float: left;
  padding-top: 1%;
}
.listHead div{
  border-bottom: 1px solid;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  color: red;
}
</style>