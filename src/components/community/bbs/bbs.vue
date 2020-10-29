<template>
  <div>
    <div class="siteTop">
      <div class="siteTitle">
        <div class="shouqi"><h1>{{ title }}</h1></div>
      </div>
      <div class="siteContent">
        <div class="siteContentHead">
          <strong>楼主</strong>&nbsp;&nbsp;&nbsp;{{userName}}&nbsp;&nbsp;&nbsp;{{siteTime}}
        </div>
        <div class="siteContentMain">
          {{siteContent}}
        </div>
        <div class="siteContentFoot">
          <el-button size="mini" @click="recommand">推荐</el-button>
          <el-button size="mini" @click="comment">评论</el-button>
          <el-button size="mini" @click="mark">收藏</el-button>
        </div>
      </div>
    </div>
    <div class="siteMain">
      <div class="siteMainHead">
        <div class="shouqi">      
        <h1>全部回帖</h1>
        <el-button size="mini" type="primary" @click="close">{{controlContent}}</el-button></div>  
      </div>
      <div class="siteContent" :style="style">
        <div class="siteContentHead">
        {{contentUser}} &nbsp;&nbsp;&nbsp;&nbsp;  {{commentTime}}</div>
      </div>
      <div class="siteMainFoot" :style="style">
        {{commentContent}}
      </div>
    </div>
    <div class="siteFoot">
      <div class="siteFootHead"><h2>Re:{{ title }}</h2>
      <textarea v-model="comment" cols="100" rows="10"></textarea>
      
      </div> 
      <div  class="siteFootFoot">
        <el-button size="mini" type="primary" @click="submit(comment)">回复</el-button>
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      // if(from.path==='/bbsHome'){
      console.log(vm.$route.params);
      // }
    });
  },
  data() {
    return {
      title: "标题",
      userName:'lhk',
      siteTime:'2020-10-28',
      contentUser:'l阿发',
      commentTime:'2020-10-28',
      commentContent:'回复内容',
      siteContent:'帖子内容',
      comment:'',
      style:{display:'block'},
      controlContent:'收起'
    };
  },
  computed: {
    
  },
  methods:{
    close(){
      if(this.controlContent==='收起'){
      this.style.display='none';
      this.controlContent='打开'}
      else{
        this.style.display='block';
        this.controlContent='收起'
      }
    }
  }

};
</script>

<style scoped>
.siteTop{
  background-color: rgb(247, 244, 244);
  /* border: 1px solid; */
}
.siteMain{
  margin-top: 3%;
  background-color: rgb(247, 244, 244);
}
.siteTitle,.siteMainHead{
  width: 90%;
  height: 50px;
  border-bottom: 1px solid black;
  position: relative;
}
.siteContent{
  position: relative;
  right: 35%;
  
}
.siteContentMain{
  padding: 3% ;
  margin-left: 10%;
}
.siteContentHead{
  color: rgb(146, 143, 143);
  margin-top:2%
}
.siteMainHead h1{
  display: inline-block;
}
.siteFoot{
  margin-top: 3%;
  padding-right:83%;
  background-color: rgb(247, 244, 244);  
}
.siteMainFoot{
  padding: 3%;
  margin-right: 60%;
}
.siteFootHead textarea{
  margin-left: 50%;
}
.shouqi{
  position: absolute;
  top:-20px;
  left: 3%;
}
.siteFootFoot{
  position: relative;
  left:350%
}
.siteContentFoot{
  padding-bottom: 1%;
}
</style>