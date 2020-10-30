<template>
  <div>
    <div class="siteTop">
      <div class="siteTitle">
        <div class="shouqi"><h1>{{ site.siteTitle }}</h1></div>
      </div>
      <div class="siteContent">
        <div class="siteContentHead">
          <strong>楼主</strong>&nbsp;&nbsp;&nbsp;{{site.userName}}&nbsp;&nbsp;&nbsp;{{site.siteTime}}
        </div>
        <div class="siteContentMain">
          {{site.siteContent}}
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
      <div v-for=" item in comments" :key="item.commentId">
      <div class="siteContent" :style="style" >
        <div class="siteContentHead">
        {{item.userName}} &nbsp;&nbsp;&nbsp;&nbsp;  {{item.commentTime}}</div>
      </div>
      <div class="siteMainFoot" :style="style">
        {{item.commentContent}}
      </div></div>
    </div>
    <div class="siteFoot">
      <div class="siteFootHead"><h2>Re:{{ site.siteTitle }}</h2>
      <textarea v-model="comment" cols="100" rows="10"></textarea>
      
      </div> 
      <div  class="siteFootFoot">
        <el-button size="mini" type="primary" @click="submit(comment)">回复</el-button>
      </div>     
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      // if(from.path==='/bbsHome'){
        axios.post('/getBbsbyid',{siteId:Number(vm.$route.params.siteId)})
        .then((res)=>{
          vm.site=res.data[0]
          console.log(vm.site);
        });
        axios.post('/queryComments',{siteId:Number(vm.$route.params.siteId)})
        .then((res)=>{
          vm.comments=res.data
          console.log(vm.comments);
        });
      // console.log(vm.$route.params);
      // }
    });
  },
  data() {
    return {
      site:'',
      comments:[],      
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
    },
    recommand(){
      
    },
    comment(){
      this.$store.commit('setComment',this.site.commentQuantity)
      this.$store.commit('addComment')
      let data={
        siteId:this.site.siteId,
        commentQuantity:this.$store.getters.getComment
      }
      axios.post('/commentQuantity',data)
      .then((res)=>{
        console.log(res.data);
      })
    },
    mark(){

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