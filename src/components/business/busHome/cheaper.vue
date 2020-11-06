<template>
  <div class="container">
    <div class="header">
      <h3>尽享折扣</h3>
    </div>
  <div class="main">
      <div><img src="./img/1.png" alt=""></div>
      <div><img src="./img/2.png" alt=""></div>
      <div><img src="./img/3.png" alt=""></div>
      <div><img src="./img/4.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  border: 1px solid;
  width: 75%;
  height: 150px;
  margin-left:14.5%;
  position: relative;
  bottom:30px
}
.header{
  border-bottom: 1px solid;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: left;
}
.main{
  display: grid;
  grid:100px/25% 25% 25% 25%;
  height: 100px;
}
.main div{
  height: 95%;  
  margin: 4% 1% ;
  border-radius: 20px;
}
.main div img{
  height: 100%;  
  border-radius: 20px;
  width: 100%;
}
</style>