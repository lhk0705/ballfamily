<template>
  <div class="register">
    <div>
      <div class="logininput">
        <label >账号：</label>
        <el-input size="mini" v-model="userId"></el-input>
      </div>
      <div class="logininput">
        <label >密码：</label>
        <el-input size="mini" v-model="password" type="password"></el-input>
      </div>
      <div class="logininput">
        <label >确认密码：</label>
        <el-input size="mini" v-model="confirmPassword" type="password"></el-input>
      </div>
        <div class="logininput">
        <label >用户名：</label>
        <el-input size="mini" v-model="userName" placeholder="快起个霸气的名字吧！"></el-input>
      </div>   
      <div class="btn">
        <el-button size="mini" type="primary" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      userId:'',
      password:'',
      confirmPassword:'',
      userName:''
    }
  },
  methods:{
    register(){
      if(this.userId===''||this.password===''||this.confirmPassword===''||this.userName===''){
        this.$message({
            message: '请填写必填项！',
            type: 'warning'
          });
      }else{
      if(this.password!==this.confirmPassword){
        this.$message({
            message: '两次密码不一致',
            type: 'warning'
          });
      }
      else{
        let contain=false
        axios.post('getUser',1)
        .then((res)=>{
          // console.log(res.data);
          let data=res.data          
          for(let item of data){
            if(item.userId===this.userId){
              this.$message({
              message: '账号已存在',
              type: 'warning'
            });
            // console.log(1);
            contain=true;
            break         
            }else{
            if(item.userName===this.userName){
              this.$message({
              message: '此用户名已存在',
              type: 'warning'
            }); 
            // console.log(2);
            contain=true 
            }
            }
          }
          if(contain===false){
            let data={
              userId:this.userId,
              password:this.password,
              userName:this.userName
            }
            axios.post('/addUser',data)
            .then()
            alert("注册成功！")
            this.$router.push('/login')
          }
          })
          // console.log(contain);
          
        }
      }
    },
  },
}
</script>

<style scoped>
.register{
  width:30%;
  margin:3% auto;
  border: 1px solid rgb(177, 174, 174);
  height: 400px;
}
.checkbox{
  float: left;
}
.link{
  float:right
}
.logininput label{
  float: left;
}
.register div{
  margin: 10px;
}
a:hover{
  color:red
}
</style>