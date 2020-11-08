<template>
  <div class="singleStore">
    <singleStoreHead class="singleStoreHead"></singleStoreHead>
  <div class="singleStore_poster">
    <img src="./poster.png" alt="">
  </div>
  <singleStoreHot class="singleStoreHot"></singleStoreHot>
  <singleStoreNew class="singleStoreNew"></singleStoreNew>
  </div>
</template>

<script>
import singleStoreHot from "./singleStore_hot";
import singleStoreNew from "./singleStore_new";
import singleStoreHead from "./singleStoreHead";
export default {
data(){
  return{
    store:{
      storeName:'NIKE旗舰店'
    }
  }
},
components:{
  singleStoreHot,singleStoreNew,singleStoreHead
}
}
</script>

<style scoped>
.singleStore{
  width: 80%;
  /* border: 1px solid; */
  margin: 0 auto;
}
.singleStoreHead{
  width: 100%;
}
.singleStore_poster{
    /* border:1px solid; */
    height: 300px;
    width: 100%;
    margin: 1% 0;
}
.singleStore_poster img{
  height: 100%;
  width: 100%;  
}

.singleStoreHot{
  width: 100%;
  height: 250px;
  margin-top:30px;
}
.singleStoreNew{
  width: 100%;
  height: 120px;
  margin-top:10px;
}
</style>