<template>
  <div> 
    <div class="films" >
    <div>
      <a href="https://www.bilibili.com/video/BV1QZ4y1572t?from=search&seid=14514761569191376272" target="_blank"> 
      <img src="./films/james.png" alt="">
      詹姆斯第四冠微纪录片《光荣之路》 ，紫金生涯新的里程碑，继续迈向伟大    
      </a>
    </div>
    <div>
      <a href="https://www.bilibili.com/video/BV1y541157Ji?from=search&seid=14514761569191376272" target="_blank">
      <img src="./films/rondo.png" alt="">
      【隆指导】“不会打中锋的控卫不是好教练”     
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20201016/011717.htm" target="_blank">
      <img src="./films/3.png" alt="">
      视频-总决赛G6微电影 回顾湖人夺冠之路    
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20201012/009856.htm" target="_blank">
      <img src="./films/4.png" alt="">
      视频-湖人106-93热火 集锦     
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20201010/010447.htm" target="_blank">
      <img src="./films/5.png" alt="">
      视频-锁定五佳球！ 巴特勒强硬打进2+1     
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20201010/009668.htm" target="_blank">
      <img src="./films/6.png" alt="">
      视频-这就是全力詹吗？ 詹姆斯三分稳稳命中   
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20201010/009965.htm" target="_blank"> 
      <img src="./films/7.png" alt="">
      视频-大心脏先生！ 巴特勒个人连中两球   
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20200908/014252.htm" target="_blank">
      <img src="./films/8.png" alt="">
      视频-8日最佳助攻   
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20200906/008524.htm" target="_blank">
      <img src="./films/9.png" alt="">
      视频-6日最佳镜头      
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20200825/013552.htm" target="_blank">
      <img src="./films/10.png" alt="">
      25日NBA十佳球 詹皇超远三分字母哥欧洲步残暴隔扣     
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20200823/008113.htm" target="_blank">
      <img src="./films/11.png" alt="">
      23日NBA最佳助攻 奥古斯丁连续过人精确制导伯奇双手暴扣  
      </a>
    </div>
    <div>
      <a href="https://nbachina.qq.com/a/20200822/011553.htm" target="_blank">
      <img src="./films/12.png" alt="">
      22日NBA最佳镜头 布朗凌波微步滑翔上篮     
      </a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    films: [
      {href:'/blank'}
      ]
  }
}
}
</script>

<style scoped>
.films{
  margin: 0 5%;
  width:120%;
  display: grid;
  grid: 200px 200px 200px /25% 25% 25% 25%;  
   /* border:1px solid black */
   
}
.films div{
  border:1px solid black;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
}

img{
  border-radius: 8px;
  width: 100%;
  height: 60%;
}
a{
  color: black;
  text-decoration: none;
  font-size: 12px;
  
}
a:hover{
  color:rgb(0, 119, 255)
}
</style>