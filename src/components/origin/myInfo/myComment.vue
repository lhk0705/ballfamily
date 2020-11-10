<template>
  <div>
    <div v-for="item in comments" :key="item.commentId">
        <div class="mycomment"> 
          评论帖子：{{item.siteTitle}}
          <br>
          评论时间：{{item.commentTime}}
          <br>
          评论内容：{{item.commentContent}}
          </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
      return{
        comments:[]
      }
    },
    created(){
      axios.post('/queryCommentsByName',{userName:this.$store.getters.getUser})
    .then((res)=>{
        this.comments=res.data
    })
    }
}
</script>

<style scoped>
.mycomment{
    margin: 1% 0;
    border-bottom: 1px solid;
}
</style>