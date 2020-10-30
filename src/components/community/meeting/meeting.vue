<template>
  <div class="newMeet">
    <div class="newMeetTitle">
      <div><strong>主题：</strong></div>
        {{ballTitle}}      
    </div>
    <div class="newPlace">
      <div class="newMeetPlace">
        <div><strong>地点：</strong></div>
        <div>
          {{ballPlace}}
        </div>
      </div>
    </div>
    <div class="newMeetTime">
      <div><strong>时间：</strong></div>
      {{placeTime}}
    </div>
    <div class="newMeetLimit">
      <div><strong>人数：</strong></div>
      <div>{{ballPeople}}/{{ballLimit}}</div>
    </div>
    <div class="ballCreater">
      <div><strong>组织者：</strong></div>
      <div>{{ballCreater}}</div>
    </div>
    <div class="ballers">
      <div><strong>球友：</strong></div>
      <div v-for="item in ballers" :key="item.joinId">{{item.userName}}</div>
    </div>
    <div class="newMeetExp">
      <div><strong>说明：</strong></div>
      <div>{{ballComments}}</div>
    </div>
    <div class="newMeetBtn">
      <el-button size="mini" @click="join" type="primary">参加</el-button>
      <el-button size="mini" @click="backMeetingHome">返回约球列表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    join() {

    },
    backMeetingHome(){
      this.$router.push('/meetingHome')
    }
  },
  data() {
    return {
      ballTitle: "来人呀！打球呀",
      ballPlace: "广州市天河区体育中心",
      ballLimit: 1,
      ballPeople:1,
      placeTime:'2020-10-28',
      ballComments:'哈哈哈哈啊哈！这是说明',
      ballers:[
        {joinId:1,
        userName:'球友1'
        }],
        ballCreater:'创建者'
    };
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