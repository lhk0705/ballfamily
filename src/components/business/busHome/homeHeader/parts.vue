<template>
    <div class="shoesShow">
        <div class="man">
        <div><h3>配件</h3></div>
        <ul>
            <li>发带</li>
            <li>护肘</li>
            <li>护膝</li>
            <li>腕带</li>            
        </ul>
        <ul>
            <li>护指</li>
            <li>运动手环</li>
            <li>运动眼境</li>           
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