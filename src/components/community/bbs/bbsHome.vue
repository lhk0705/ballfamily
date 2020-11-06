<template>
  <div class="bbsHome">
    <div class="bbsHomeHead">
      <div class="most">
        <el-button size="mini" @click="mostNew">最新</el-button>
        &nbsp;&nbsp;|&nbsp;
        <el-button size="mini" @click="mostHot">最热</el-button>
      </div>
      <div class="searchBbs">
          <el-input size="mini" style="width:90%" placeholder="请输入搜索条件" v-model="condition"></el-input>
          <button size="mini" style="height:27px;width:30px" @click="search(condition)"><i class="icon iconfont icon-search"></i></button>
      </div>
      <div class="toNewBbs"> 
        <el-button size="mini" type="primary" @click="toNewBbs">发帖</el-button>
      </div>
    </div>
    <div class="bbsBody">
      <div class="bbsBody_head">
        <div class="lp"><strong>主贴标题</strong>
          </div>
        <div class="rp"><strong>回复数量</strong></div>
      </div>
      <div v-if="sites.length">
        <ul v-for="(item,index) in sites" :key="index" >
          <li>
            <div class="lp"><router-link :to="{name:'bbs',params:{siteId:sites[index].siteId}}">{{sites[index].siteTitle}}</router-link></div>
            <div class="rp">{{sites[index].commentQuantity}}</div>            
          </li>
          <br>
        </ul>
        
        </div>
        <div v-else>
            暂无相应搜索结果~
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
  return {
    condition:'',
    sites:[]
  }
},
methods:{
  toNewBbs(){
    this.$router.push('/newBbs')
  },
  search(condition){
      let result=this.sites.filter((item)=>{
        return item.siteTitle.indexOf(condition)>-1
      })
      console.log(result);
      this.sites=result.slice()
    },
    mostNew(){
      let res=this.sites;      
      for(let i=0;i<res.length-1;i++){
        for(let j=0;j<res.length-1;j++){
           if(res[j].siteTime<res[j+1].siteTime){
             let temp=res[j]
             res[j]=res[j+1]
             res[j+1]=temp
           }
        }
      }
      this.sites=res.slice()
      console.log(this.sites);
    },
    mostHot(){
      let sites=this.sites
      for(let i=0;i<sites.length-1;i++){
          for(let j=0;j<sites.length-1;j++){
            if(Number(sites[j].commentQuantity)<Number(sites[j+1].commentQuantity)){
              let temp=sites[j]
              sites[j]=sites[j+1]
              sites[j+1]=temp
            }
          }
      }
      
      this.sites=sites.slice()
      // console.log(this.sites);
    },
    toBbs(){
      alert("!!")
    },
    getBbs(){
      axios.post('/getAllBbs',1)
      .then((res)=>{
        this.sites=res.data
        console.log(res.data);   
        })
    }
},
created(){
  this.getBbs()
},
}
</script> 

<style scoped>
.bbsHome{
    height:300px;
    width:90%;
    margin: 10px auto;
    
}
.bbsHomeHead{
  height:10%;
  width: 70%;
  /* border-bottom:1px solid; */
  margin:4% auto 0 auto
}
.most{
  float: left;
}
.searchBbs{
  position: relative;
  left: 20%;
  display: flex;
  /* border: 1px solid; */
  width: 40%;
}
.toNewBbs{
  float: right;
  position: relative;
  bottom:90%;
}
.bbsBody{
  width: 70%;
  height: 300px;
  margin: 0 auto;
  margin-top: 20px;
}
.bbsBody_head{
  height: 20px;
  border-bottom: 1px dotted black;
}
li{
  list-style: none;
  
  width: 95%;
  position: relative;
  right: 5%;
}
.lp{
  float: left;
  height:80%;
}
.rp{
  float: right;
  height: 80%;
}
a{
  color: rgb(22, 4, 4);
}
a:hover{
  color:red
}
</style>