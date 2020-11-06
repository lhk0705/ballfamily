<template>    
      <div class="homeHead">
        <!-- <div class="themeMarket"> -->
          <ul>
            <li><strong>主题市场</strong></li>
            <li @mouseover="shoesVis" @mouseout="themeVis">球鞋</li>
            <li @mouseover="clothesVis" @mouseout="themeVis">服饰</li>
            <li @mouseover="partsVis" @mouseout="themeVis"> 配件</li>
            <li @mouseover="propsVis" @mouseout="themeVis">道具</li>
            <li @mouseover="teamVis" @mouseout="themeVis">球队</li>
            <li @mouseover="healthVis" @mouseout="themeVis">运动健康</li>
          </ul>
          <div class="headLeft">
          <div class="theme" :style='theme' @mouseout="themeVis" @mouseover="themeDis">
          <shoes  :style='shoes'></shoes>
          <parts  :style='parts'  ></parts>
          <clothes  :style='clothes' ></clothes>
          <props  :style='props' ></props>
          <team  :style='team' ></team>
          <health  :style='health' ></health>
          </div>
          <itemRecommand class="itemRecommand" :style='itemRecommand'></itemRecommand>
                   
          </div>
          <todayHot class="todayHot" :style='todayHot'></todayHot> 
        <!-- </div> -->
      </div>
</template>

<script>
import shoes from "./shoes";
import parts from "./parts";
import props from "./props";
import team from "./team";
import health from "./health";
import clothes from "./clothes";
import itemRecommand from "./itemRecommand";
import todayHot from "./todayHot";

export default {
  components:{
    shoes,parts,clothes,props,team,health,itemRecommand,todayHot
  },
  data(){
    return{
      shoes:{visibility:'hidden'},
      parts:{visibility:'hidden'},
      theme:{display:'none'},
      props:{visibility:'hidden'},
      team:{visibility:'hidden'},
      health:{visibility:'hidden'},
      clothes:{visibility:'hidden'},
      itemRecommand:{display:'block'},
      

    }
  },
  methods:{
    propsVis(){
      this.theme.display='block';
      this.itemRecommand.display='none';
      this.shoes.visibility='hidden';
      this.parts.visibility='hidden';
      this.clothes.visibility='hidden';
      this.props.visibility='visible';
      this.team.visibility='hidden';
      this.health.visibility='hidden';
    },
    teamVis(){
      this.theme.display='block';
      this.itemRecommand.display='none';
      this.shoes.visibility='hidden';
      this.parts.visibility='hidden';
      this.clothes.visibility='hidden';
      this.props.visibility='hidden';
      this.team.visibility='visible';
      this.health.visibility='hidden';
    },
    healthVis(){
      this.theme.display='block';
      this.itemRecommand.display='none';
      this.shoes.visibility='hidden';
      this.parts.visibility='hidden';
      this.clothes.visibility='hidden';
      this.props.visibility='hidden';
      this.team.visibility='hidden';
      this.health.visibility='visible';
    },
    shoesVis(){
      this.theme.display='block';
      this.itemRecommand.display='none';
      this.shoes.visibility='visible';
      this.parts.visibility='hidden';
      this.clothes.visibility='hidden';
      this.props.visibility='hidden';
      this.team.visibility='hidden';
      this.health.visibility='hidden';
    },
    partsVis(){
      this.theme.display='block';
      this.itemRecommand.display='none';
      this.shoes.visibility='hidden';
      this.parts.visibility='visible';
      this.clothes.visibility='hidden';
      this.props.visibility='hidden';
      this.team.visibility='hidden';
      this.health.visibility='hidden';
    },
    clothesVis(){
      this.theme.display='block';
      this.itemRecommand.display='none';
      this.shoes.visibility='hidden';
      this.clothes.visibility='visible';
      this.parts.visibility='hidden';
      this.props.visibility='hidden';
      this.team.visibility='hidden';
      this.health.visibility='hidden';
    },
    themeVis(){      
      this.theme.display='none';
      this.itemRecommand.display='block';
    },
    themeDis(){
      this.theme.display='block';
      this.itemRecommand.display='none';
    }
  }
}
</script>

<style scoped>
.homeHead{
  /* border: 1px solid; */
  margin: 0 auto;
  display: flex;
  height: 250px;
  width: 80%;
  position: relative;
  bottom: 30px;
}
li{
  list-style: none;
  border: 1px solid;
  height: 12%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
}
ul{
  width:20%; 
  /* border: 1px solid; */
  height: 100%;
}
.headLeft{
  /* border: 1px solid;  */
  width: 50%; 
  height: 222px;
  margin-top: 14.5px;
}
.theme{
  width: 95%; 
  height: 222px;
  border: 1px solid; 
  /* float: left; */
}
.itemRecommand{
  border: 1px solid; 
  width: 95%; 
  height: 222px;  
  /* float: left; */
}
.todayHot{
  border: 1px solid; 
  width: 50%; 
  height: 222px;
  position:relative;
  /* top: 10%; */
  margin-top: 14.5px;
  
}

</style>