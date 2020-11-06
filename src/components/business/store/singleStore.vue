<template>
  <div class="singleStore">
    <div class="singleStore_head">
      <div class="singleStore_head_left">
          <div>
            <img src="./nike.png" alt="">
          </div>
          <div><h3>
            {{store.storeName}}
          </h3>            
          </div>
      </div>
      <div class="singleStore_head_right">
        <el-input
            size="mini"            
            v-model="condition"           
          ></el-input>
          <button
            size="mini"            
            @click="search(condition)"
          >
            <i class="icon iconfont icon-search"></i>
          </button>
      </div>  
  </div>
  <div class="singleStore_choise">
    <ul><strong>
      <li>
        <router-link to='/singleStore'>首页</router-link>
        </li>
      <li>
        <router-link :to="{name:'items',params:{}}">男子</router-link></li>
      <li><router-link :to="{name:'items',params:{}}">女子</router-link></li>
      <li><router-link :to="{name:'items',params:{}}">所有商品</router-link></li>
   </strong></ul>
  </div>
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
export default {
data(){
  return{
    store:{
      storeName:'NIKE旗舰店'
    }
  }
},
components:{
  singleStoreHot,singleStoreNew
}
}
</script>

<style scoped>
.singleStore{
  width: 80%;
  /* border: 1px solid; */
  margin: 0 auto;
}
.singleStore_head{
  height: 100px;
  border-bottom: rgb(230, 230, 230) 1px solid;  
  margin:0 auto;
  display: grid;
  grid: none / 50% 50%
}
.singleStore_head div{
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  margin: 1%;
}
.singleStore_head_right{
  width: 70%;
}
.singleStore_head_left{
  display:flex;
  justify-content: center;
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
li{
  float: left;
  margin: 1%;
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