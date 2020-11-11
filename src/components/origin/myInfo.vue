<template>
  <div class="myInfo">
    <div class="myInfoHead">
      <div>
        <h3>用户名：</h3>
        <div>{{user.userName}}</div>
        </div>
        <div>
        <h3>喜爱的NBA球队：</h3>
        <div>{{user.likeNBA}}</div>
        </div>
        <div>
        <h3>注册日期：</h3>
        <div>{{user.birthday}}</div>
        </div>
        <div>
        <h3>喜爱的CBA球队：</h3>
        <div>{{user.likeCBA}}</div>
        </div>
    </div>
    <el-row class="myInfoMain">
      <el-col :span='5' class="myInfoLeft">
        <div><router-link to='/mySite'>我的帖子</router-link></div>
        <div><router-link to='/myMark'>我的收藏</router-link></div>
        <div><router-link to='/myComment'>我的评论</router-link></div>
        <div><router-link to='/myBall'>我的约球</router-link></div>
        <!-- <div><router-link to='/mySite'>我的好友</router-link></div> -->
        <div><router-link to='/myOrder'>我的订单</router-link></div>
        <div><router-link to='/myChart'>我的购物车</router-link></div>
        <div @click="toMyStore">我的店铺</div>
      </el-col>
      <el-col :span='19' class="myInfoRight">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
  return{
    user:''    
  }
},
created(){
    axios.post('/queryUser',{userName:this.$store.getters.getUser})
    .then((res)=>{
        this.user=res.data[0]
    })
},
methods:{
  toMyStore(){
    axios.post('/getMyStore',{userName:this.$store.getters.getUser})
    .then((res)=>{
      // console.log(res.data);
      if(res.data.length){
        this.$router.push({name:'singleStore',params:{userName:this.$store.getters.getUser}})
      }else{
        this.$router.push('/myStore')
      }
    })
  }
}
}
</script>

<style scoped>
.myInfo{
  width: 80%;
  margin: 2% auto;
}
.myInfoHead{
  height: 80px;
  border: 1px solid rgb(185, 185, 185);
  display: grid;
  grid:50% 50%/50% 50%;
  margin-bottom: 40px;
}
.myInfoHead div{
  /* border: 1px solid; */
  text-align:left;
  display: inline;
  margin: 1% 0 ;
}
h3{
  display: inline;
  margin-right: 10%;
}
.myInfoLeft div{
  height: 40px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>