<template>
  <div id="app" v-if="!user">
    <heading></heading>
    <br>
    <router-view/>    
      <foot></foot>
  </div>
  <div v-else> 
    <origin></origin>
      </div>
</template>

<script>

import heading from "./components/common/header";
import foot from "./components/common/foot";
import origin from "./components/origin/origin";
export default {
  components:{
    heading,foot,origin
  },
  name: 'App',
  data(){
    return{
      user:''
    }
  }
}
</script>

<style >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border:1px solid black;
  margin: 0 150px;
}
</style>
