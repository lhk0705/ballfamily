<template>
<div class="new">
  <div></div>
  <div id="app" >
    <heading></heading>
    <br>
    <router-view/>    
      <foot></foot>
  </div>
  <div></div>
</div>
</template>

<script>

import heading from "./components/common/header";
import foot from "./components/common/foot";
export default {
  components:{
    heading,foot
  },
  name: 'App',
  data(){
    return{
      user:''
    }
  },
  mounted() {
      this.$router.afterEach((to, from, next) => {
      window.scroll(0, 0)
      })
    },
}
</script>

<style >

#app {
  font-family: 'Microsoft YaHei' ! important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* border:1px solid black; */
  background-color: white;
  z-index: 1;
}
#app a{
  text-decoration: none;
  color: black;
}
#app a:hover{
  color: red;
}
li{
  list-style: none;
}
.new{
display:grid;
grid:  none/15% 70% 15%;
background-color: rgb(245, 245, 245);
}

</style>
