<template>
  <div class="items">
    <div class="itemHead">
      <div>综合排序</div>
      <div>销量</div>
      <div>价格</div>
    </div>
    <!-- <div class="itemList" v-for="item in items" :key='item.itemId'> -->
    <div class="itemList">
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      <div>
            1
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    items:[{
      itemId:0
    }]
  }
}
}
</script>

<style scoped>
.items{
  width:80%;
  margin: 0 auto;
}
.itemHead{
  border:1px solid  rgb(206, 205, 205);  
  height: 30px;
  display: flex;
  background: rgb(243, 242, 242);
}
.itemHead div{
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid  rgb(206, 205, 205);
}
.itemHead div:hover{
  cursor: pointer;
  color: red;
  background: white;
}
.itemList{
  margin-top: 1%;
  display: flex;
  flex-flow:row wrap;
  width: 100%;
  /* border: 1px solid; */
}
.itemList div{
  width: 22%;
  height: 150px;
  border: 1px solid;
  margin: 1%;
}
</style>