<template>
  <div  class="item">
      <div class="itemImg">
          <img src="./篮球.png" alt="">
      </div>
      <div class="itemInfo">
          <h3>{{item.itemName}}</h3>
          原价：{{item.priceOld}}
          <br>
          促销价：<h3 class="priceNew">￥{{item.priceNew}}</h3>          
          <div class="sales">
            <div>销量</div>|
            <div>累计评价</div>              
          </div>
            <label >数量：</label>
            <el-input size=mini type="number" class="quantity" v-model="quantity" min="1"></el-input>
            <div class="btn">
                <el-button type="primary">立即购买</el-button>
                <el-button >加入购物车</el-button>
            </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        item:{
            itemName:'斯伯丁篮球',
            priceOld:100,
            priceNew:80,
        },
        quantity:1
    }
}
}
</script>

<style scoped>
.item{
    display: flex;
    align-items: center;
}
.itemImg{
    width: 50%;
    height: 100%;
    /* border: solid 1px; */
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    width: 80%;
    height: 80%;
}
.itemInfo{
    width: 50%;
    text-align: left;
    /* border: solid 1px; */
}
.priceNew{
    display: inline-block;
}
.sales{
    display: flex;
    height: 30px;
    margin-bottom: 5%;
    border-bottom: 1px solid;
    border-top: 1px solid;
    align-items: center;
}
.sales div{
    width: 50%;
    /* border-right: solid 1px; */
}
.quantity{
    width: 20%;
}
.btn{
    display: flex;
    margin: 5% 0;
    justify-content: center;
}
</style>