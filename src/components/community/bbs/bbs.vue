<template>
  <div>
    <div class="siteTop">
      <div class="siteTitle">
        <h1>{{ title }}</h1>
      </div>
      <div class="siteContent">
        <div class="siteContentHead">
          <strong>楼主</strong>&nbsp;{{userName}}&nbsp;&nbsp;&nbsp;{{siteTime}}
        </div>
        <div class="siteContentMain">
          <textarea cols="30" rows="10"></textarea>
        </div>
        <div class="siteContentFoot">
          <el-button size="mini" >推荐</el-button>
          <el-button size="mini" >评论</el-button>
          <el-button size="mini" >收藏</el-button>
        </div>
      </div>
    </div>
    <div class="siteMain">
      <div class="siteMainHead">
        <h1>全部回帖</h1>
        <el-button size="mini" type="primary">收起</el-button>
      </div>
      <div class="siteMainMain">
        {{contentUser}} &nbsp;&nbsp;&nbsp;&nbsp;  {{commentTime}}
      </div>
      <div class="siteMainFoot">
        {{commentContent}}
      </div>
    </div>
    <div class="siteFoot">
      <h2>Re:{{ title }}</h2>
      <textarea></textarea>
      <el-button size="mini" type="primary">回复</el-button>
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
      title: "lalala1",
      userName:'lhk',
      siteTime:'2020-10-28',
      contentUser:'l阿发',
      commentTime:'2020-10-28',
      commentContent:'sfafawfawfawfawfeafgawef',
      // contentUser:'',
    };
  },
  computed: {
    // bbs(){
    //   return this.$route.param.siteTitle
    // }
  },
};
</script>

<style>
</style>