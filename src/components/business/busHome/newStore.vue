<template>
  <div class="container">
    <div class="header">
      <h3>新店开张</h3>
    </div>
  <div class="main">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
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