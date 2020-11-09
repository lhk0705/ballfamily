<template>
  <div>
  <div class="itemComment" v-for="item in evaluate" :key='item.evaluateId'>
    <div class="evaluateContent">{{item.evaluateContent}}</div>
    <div class="evaluatePeople">{{item.userName}} </div>
    <div class="evaluateTime">{{item.evaluateTime}}</div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      evaluate:[
        {
          evaluateId:0,
          evaluateContent:'hahh',
          userName:'henry',
          evaluateTime:'2020-02-02'
        }
      ]
    }
  }
}
</script>

<style scoped>
.itemComment{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  /* border: 1px solid ; */
}
.evaluateContent{
  width: 60%;
  height: 20px;
  /* border: 1px  solid; */
  text-align: left;
}
.evaluatePeople{
  width:35%;
  height: 20px;
  /* border: 1px  solid; */
  margin-left: 3%;
  color: rgb(179, 177, 177);

}
.evaluateTime{
  width:35%;
  height: 20px;
  /* border: 1px  solid; */
  color: rgb(179, 177, 177);
}

</style>