<template>
  <div class="newMeet">
    <div class="newMeetTitle">
      <div><strong>主题：</strong></div>
      <div class="inputTitle">
        <el-input size="mini" v-model="ballTitle"></el-input>
      </div>
    </div>
    <div class="newPlace">
      <div class="newMeetPlace">
        <div><strong>地点：</strong></div>
        <div class="placeInput">
        <el-input
          size="mini"
          placeholder="请输入具体地址"
          v-model="place"
        ></el-input>
      </div>
      </div>
      
    </div>
    <div class="newMeetTime">
      <div><strong>约球时间：</strong></div>
      <el-date-picker
        size="mini"
        value-format="yyyy-MM-dd"
        v-model="ballTime"
        type="date"
        placeholder="请选择日期"
      ></el-date-picker>
    </div>
    <div class="newMeetLimit">
      <div><strong>人数：</strong></div>
      <div><el-input size="mini" type="number" v-model="ballLimit" min="1"></el-input></div>
    </div>
    <div class="newMeetExp">
      <div><strong>说明：</strong></div>
      <div><textarea name="" id="" cols="80" rows="5" v-model="ballComments"></textarea></div>
    </div>
    <div class="newMeetBtn">
      <el-button size="mini" @click="newMeet" type="primary">创建</el-button>
      <el-button size="mini" @click="backMeetingHome">返回约球列表</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    newMeet() {
      let data={
        ballId:this.$store.getters.getBallId,
        ballTitle:this.ballTitle,
        place:this.place,
        ballTime:this.ballTime,
        ballPeople:1,
        ballLimit:this.ballLimit,
        ballComments:this.ballComments,
        ballCreater:'henry'
      }
      axios.post('/addBall',data)
      .then()
      this.$store.commit('addBall')
      alert('创建成功！正在返回约球列表...')
      this.$router.push('/meetingHome')
    },
    backMeetingHome(){
      this.$router.push('/meetingHome')
    }
    
  },
  data() {
    return {
      ballTitle: "",
      place: "",
      ballLimit: 1,
      ballTime:'',
      ballComments:''
    };
  },
};
</script>

<style scoped>

.newMeetTitle,
.newMeetExp,
.newMeetPlace,
.newMeetTime,
.newMeetLimit 
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