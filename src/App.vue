<template>
  <div id="app" >
    <heading></heading>
    <br>
    <router-view/>    
      <foot></foot>
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
  }
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
  margin: 0 150px;

}
</style>
