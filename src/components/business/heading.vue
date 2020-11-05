<template>
  <div>
    <div class="community">
      <div class="logo">
        <div class="baller"><h2>球友商城</h2></div>
        <div class="baller_span"><strong>装备，让生活运动起来！</strong></div>
      </div>
      <div class="busSearch">
        <div class="choice">
          <div @click="a" :style="stylea">宝贝</div>
          <div @click="b" :style="styleb">店铺</div>
        </div>
        <div class="searchBbs">
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
          <ul>
          <li><router-link :to="{name:'items',params:{type:''}}">篮球鞋</router-link></li>
          <li><router-link :to="{name:'items',params:{type:''}}">上装</router-link></li>
          <li><router-link :to="{name:'items',params:{type:''}}">文化衫</router-link></li>
          <li><router-link :to="{name:'items',params:{type:''}}">球队纪念品</router-link></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
    condition:'',
    target:'items',
    stylea:{
      background:' rgb(250, 199, 199)',
      border:'none'
      },
    styleb:{
      background:'',
      border:''
      },
      
  }
    
  },
  methods:{
    a(){
      this.stylea={
      background:' rgb(250, 199, 199)',
      border:'none'
      },
      this.styleb={
      background:'',
      border:''
      }
    },
    b(){
      this.styleb={
      background:' rgb(250, 199, 199)',
      border:'none'
      },
      this.stylea={
      background:'',
      border:''
      }
    }
  }
};
</script>

<style scoped>
.community {
  width: 80%;
  height: 50px;
  margin: 30px auto;
  border-bottom: 1px solid;
}
.baller {
  float: left;
  width: 40%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  background-color: rgb(188, 223, 243);
}
.baller_span {
  float: left;
  position: relative;
  top: 60%;
}
.logo {
  float: left;
  width: 50%;
  height: 50px;
}
.community_choise {
  float: right;
  position: relative;
  top: 60%;
  margin-right: 1%;
}
.searchBbs{
  /* position: relative;
  left: 40%; */
  display: flex;
  width:100%;
  
}
.busSearch{
  /* border:1px solid; */
  width:50%;
  float:right;
  position: relative;
  /* height:60px */
  bottom: 15px;
}
.choice{
    /* border:1px solid; */
    /* width:60%; */
    display: flex;
}
.choice div{
  /* border:1px solid; */
  border-bottom:none;
  font-size: 12px;
  width: 10%;
  margin: 0 1%;
  border-radius: 2px;

}
.choice div:hover{
  cursor: pointer;
  color:red;
  background-color: rgb(250, 199, 199);
}
a{
  text-decoration: none;
  color:black
}
li{
  list-style:none;
  float:left;
  width:21%;
  font-size: 12px;
  /* border: 1px solid; */
  margin: 0 2%;
  text-align: left;
  /* height: 10px; */
  position: relative;
  right:10%;
  bottom: 1rem;
}
a:hover{
  color: red;
}
</style>