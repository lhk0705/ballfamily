<template>
  <div class="login">
    <div><strong>一键开启篮球之旅！</strong></div>
    <div>
      <div class="logininput">
        <label >账号：</label>
        <el-input size="mini" v-model="userId" @keyup.enter.native="login"></el-input>
      </div>
      <div class="logininput">
        <label >密码：</label>
        <el-input size="mini" v-model="password" type="password" @keyup.enter.native="login"></el-input>
      </div>
      <div>
        <el-checkbox class="checkbox" v-model="autoLogin">自动登录</el-checkbox>
        <router-link class="link" to="/register">立即注册</router-link>
      </div>      
      <div class="btn">
        <el-button size="mini" type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      autoLogin:false,
      userId:'',
      password:''
    }
  },
  methods:{
    login(){
    if(this.userId===''||this.password===''){
      this.$message({
        message: '请填写必填项！',
        type: 'warning'
      })
    }
    else{
      axios.post('/getUser',{userId:this.userId,password:this.password})
      .then((res)=>{
        if(res.data){
          // console.log(res.data);
          // 存储token
          this.$store.commit('setToken',res.data)
          if(this.autoLogin){
              this.$store.commit('autoUser',this.userId)
              // this.$store.commit('autoUser','lll')
            }else{
              this.$store.commit('setUser',this.userId)
            } 
          alert("登陆成功！")
          this.$router.push('/')
        }else{
 
          alert('请输入正确的账号密码！')
        }
      })
    }
  }
  }
  
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
  font-size: 14px;
}
.login{
  width:30%;
  margin:3% auto;
  border: 1px solid rgb(177, 174, 174);
  height: 280px;
}
.checkbox{
  float: left;
}
.link{
  float:right
}
.btn{
  position: relative;
  top: 40px;
}
.logininput label{
  float: left;
}
.login div{
  margin: 10px;
}
a:hover{
  color:red
}
</style>