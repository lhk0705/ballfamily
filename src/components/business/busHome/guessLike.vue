<template>
  <div class="container">
    <div class="header">
      <h3>猜你喜欢</h3>
    </div>
  <div class="main">
      <div>
        <img src="./img/guesslike1.png" alt="">
      </div>
      <div><img src="./img/guesslike2.png" alt=""></div>
      <div><img src="./img/guesslike3.png" alt=""></div>
      <div><img src="./img/guesslike4.png" alt=""></div>
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