<template>
  <div>
      <div class="itemMainHead">
          <div class="itemTotal" @click="toTotal" :style="itemTotal">商品详情</div>
          <div class="itemComment" @click="toComment" :style="itemComment">评价</div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods:{
        toTotal(){
            this.$router.push('/itemTotal')
        },
        toComment(){
             this.$router.push('/itemComment')
        }
    },
    data(){
        return{
            // itemTotal:{
            //     background:'grey'
            // },
        }
    }
}
</script>

<style scoped>
.itemMainHead{
    display: flex;
    height: 30px;
    border-bottom: solid 1px;
}
.itemMainHead div{
    width: 15%;
    height: 100%;
    border-right: 1px solid;
    display: flex;
  align-items: center;
  justify-content: center;
}
.itemMainHead div:hover{
    cursor: pointer;
  color: red;
  background: white;
}
</style>