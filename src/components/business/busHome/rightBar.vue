<template>
  <div class="rightBar">
      <ul>
          <li @click='hot'>
              热卖
              <br>
              单品
          </li>
          <li @click='cheap'>
              尽享
              <br>
              折扣
          </li>
          <li @click='recommand'>
              大咖
              <br>
              推荐
          </li>
          <li @click='guess'>
              猜你
              <br>
              喜欢
          </li>
          <li @click='newStore'>
              新店
              <br>
              开张
          </li>
          <li @click='top'>
              <strong>^</strong>
              <br>
              顶部
          </li>
      </ul>
      
  </div>
</template>

<script>
export default {
methods:{
    hot(){
        this.$emit('hot')
    },
    cheap(){
        this.$emit('cheap')
    },
    recommand(){
        this.$emit('recommand')
    },
    guess(){
        this.$emit('guess')
    },
    newStore(){
        this.$emit('newStore')
    },
    top(){
        this.$emit('top')
    },
}
}
</script>

<style scoped>
li{
    border: 1px solid;
    width:40px;
    list-style: none;
    /* background-color:black ; */
}
li:hover{
    cursor: pointer;
    color: red;
}

</style>