<template>
  <div class="newMeet">
    <div class="newMeetTitle">
      <div><strong>主题：</strong></div>
        {{ball.ballTitle}}      
    </div>
    <div class="newPlace">
      <div class="newMeetPlace">
        <div><strong>地点：</strong></div>
        <div>
          {{ball.place}}
        </div>
      </div>
    </div>
    <div class="newMeetTime">
      <div><strong>约球时间：</strong></div>
      {{ball.ballTime}}
    </div>
    <div class="newMeetLimit">
      <div><strong>人数：</strong></div>
      <div>{{ball.ballPeople}}/{{ball.ballLimit}}</div>
    </div>
    <div class="ballCreater">
      <div><strong>组织者：</strong></div>
      <div>{{ball.ballCreater}}</div>
    </div>
    <div class="ballers">
      <div><strong>球友：</strong></div>
      <div v-for="item in ballers" :key="item.userName">{{item.userName}}</div>
    </div>
    <div class="newMeetExp">
      <div><strong>说明：</strong></div>
      <div>{{ball.ballComments}}</div>
    </div>
    <div class="newMeetBtn">
      <el-button size="mini" @click="join" type="primary" :disabled="disabled">{{state}}</el-button>
      <el-button size="mini" @click="backMeetingHome">返回约球列表</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  beforeRouteEnter:(to,from,next)=>{
    next((vm)=>{
      axios.post('/getBallById',{ballId:vm.$route.params.ballId})
          .then((res)=>{
          vm.ball=res.data[0]
        })
      axios.post('/getBallersById',{ballId:vm.$route.params.ballId})
      .then((res)=>{
        vm.ballers=res.data
      })
    })
  },
  methods: {
    join() {

    },
    backMeetingHome(){
      this.$router.push('/meetingHome')
    }
  },
  data() {
    return {
      ball:'',
      ballers:[], 
      state:'参加' ,
      disabled:false      
    }
  },
  watch:{
    ball(newV){
      if(newV.ballPeople===newV.ballLimit){
        this.state='已满'
        this.disabled=true
      }
    }
  },
};
</script>

<style scoped>

.newMeetTitle,
.newMeetExp,
.newMeetPlace,
.newMeetTime,
.newMeetLimit,
.ballCreater,
.ballers 
/* .placeInput */
{
  width: 60%;
  display: flex;
  justify-content: left;
  align-items: center;
  /* border: 1px solid; */
  position: relative;
  left:150px
}
.placeInput{
  position: relative;
  left:195px
}
.inputTitle {
  width: 30%;
}
.newMeet div {
  margin: 1% 0;
}

.placeInput {
  width: 40%;
}
</style>