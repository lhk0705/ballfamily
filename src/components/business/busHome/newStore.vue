<template>
  <div class="container">
    <div class="header">
      <h3>新店开张</h3>
    </div>
  <div class="main">
      <div>
        <img src="./img/new1.png" alt=""></div>
      <div><img src="./img/new2.png" alt=""></div>
      <div><img src="./img/new3.png" alt=""></div>      
      <div><router-link to="/singleStore"><img src="../store/nike.png" alt=""></router-link></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
.container{
  border: 1px solid;
  width: 75%;
  height: 250px;
  margin-left:14%;
  margin-top:10px;
  position: relative;
  bottom:30px
}
.header{
  border-bottom: 1px solid;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: left;
}
.main{
  display: grid;
  grid:220px/25% 25% 25% 25%;
  height: 100px;
}
.main div{
  border:1px solid;
  height: 80%;  
  margin: 10% 3% ;
  /* border-radius: 20px; */
}
</style>