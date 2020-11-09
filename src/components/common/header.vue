<template>
  <div class="head">
    <div class="fst-head">
      <div class="logo">
        <router-link to="/">        
        <img src="./篮球.jpg" width="100px" height="60px" alt=""
        /></router-link>
      </div>
      <div class="user" v-if="userName">
        <span
          ><strong
            >欢迎进入篮球世界！
            <router-link id="username" to="/myInfo">{{
              userName
            }}</router-link></strong
          ></span
        >
        <router-link to="/" @click.native="logOut">[退出]</router-link>
      </div>
      <div class="user" v-else>
        <span><strong>欢迎进入篮球世界！ 请</strong></span>
        <router-link to="/login">登录</router-link>
      </div>
    </div>
    <div>
      <ul class="sec-head">
        <li>
          <router-link to="/"><strong>首页</strong> </router-link>
        </li>
        <li>
          <router-link to="/nba"><strong>NBA</strong></router-link>
        </li>
        <li>
          <router-link to="/cba"><strong>CBA</strong></router-link>
        </li>
        <li>
          <router-link to="/community"><strong>社区</strong></router-link>
        </li>
        <!-- <li>
          <router-link to="/education"><strong>教学专区</strong></router-link>
        </li> -->
        <li>
          <router-link to="/business"><strong>商城</strong></router-link>
        </li>
        <li>
          <router-link to="/myInfo"><strong>我的</strong></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    logOut() {
      this.$store.commit("setUser", "");
      this.userName = "";
      alert("退出成功");
    },
  },
};
</script>

<style scoped>
.head {
  height: 90px;
  border-bottom: 3px solid rgb(184, 183, 183);
  border-radius: 4px;
  width: 99%;
}
#username {
  color: rgb(252, 249, 249);
}
#username:hover,
a:hover {
  border-bottom: 1px solid;
  color: rgb(0, 153, 255);
}
.fst-head {
  height: 60px;
  /* border-bottom:1px solid black; */
  background-color: rgb(192, 216, 243);
}
.logo {
  float: left;
  position: relative;
  left: 10%;
}
.user {
  float: right;
  position: relative;
  right: 80px;
  top: 30px;
  color: rgb(252, 249, 249);
}
.sec-head li {
  float: left;
  width: 100px;
  margin: 0 2%;
  list-style: none;
  cursor: pointer;
  color: black;
  border-right: 1px solid;
  padding-right: 30px;
}
a {
  text-decoration: none;
  color: black;
}
.sec-head {
  margin: 10px auto;
  display: flex;
  justify-content: center;
}
</style>