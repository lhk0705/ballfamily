<template>
  <div class="container">
    <div class="header">
      <h3>尽享折扣</h3>
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
  border:1px solid;
  height: 80%;  
  margin: 10% 3% ;
  border-radius: 20px;
}
</style>