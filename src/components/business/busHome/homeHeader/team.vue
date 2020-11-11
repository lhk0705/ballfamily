<template>
    <div class="shoesShow">
        <div class="man">
        <div><h3>球队服装</h3></div>
        <ul>
            <li>上装</li>
            <li>下装</li>
            <li>运动袜</li>
            <li>球鞋</li>            
        </ul>
        </div>
        <div class="man">
        <div><h3>球队周边</h3></div>
        <ul>
            <li>吉祥物</li>
            <li>水杯</li>
        </ul>
        </div>
        
        
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shoesShow{
    width: 100%;
    height: 100%;
    /* border: 1px solid; */
    font-size: 12px;
}
ul{
    width: 100%;
    height: 20px;
    position: relative;
    margin: 5% auto;
    display: flex;
    flex-flow: row wrap;
    /* border: 1px solid; */
}
li{
    float: left;
    width: 20%;
    /* border: 1px solid; */
    height: 100%;
}
h3{
    /* position: relative; */
    /* right:25%; */
    height: 10%;
    /* border: 1px solid; */
    text-align: left;
    width: 80%;
    margin: 0 auto;

}
.man{
    /* position: relative;
    right: 5%; */
    /* border: 1px solid; */
    width: 100%;    
}
</style>