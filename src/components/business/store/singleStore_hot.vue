<template>
  <div class="container">
    <div class="header">
      <h3>人气榜单</h3>
    </div>
  <div class="main">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
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
/* .container{
  border: 1px solid;
  width: 100%;
  height: 250px;

  margin-top:10px;
} */
.header{
  border-bottom: 1px solid;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main{
  display: grid;
  grid:100% 100%/25% 25% 25% 25%;
  height: 100px;
}
.main div{
  border:1px solid;
  height: 80%;  
  margin: 10% 2% ;
  /* border-radius: 20px; */
}
</style>