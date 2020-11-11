<template>
    <div class="shoesShow">
        <div class="man">
        <div><h3>男鞋</h3></div>
        <ul>
            <li><router-link :to="{name:'items',params:{}}">篮球鞋</router-link>
                </li>
            <li>训练鞋</li>
            <li>跑步鞋</li>
            <li>文化鞋</li>
        </ul>
        </div>
        <div class="man">
        <div><h3>女鞋</h3></div>
        <ul>
            <li>篮球鞋</li>
            <li>训练鞋</li>
            <li>跑步鞋</li>
            <li>文化鞋</li>
        </ul>
        </div>
        <div class="man">
        <div><h3>儿童鞋</h3></div>
        <ul>
            <li>篮球鞋</li>
            <li>训练鞋</li>
            <li>跑步鞋</li>
            <li>文化鞋</li>
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
    height: 30px;
    position: relative;
    margin: 5% auto;
    /* border: 1px solid; */
}
li{
    float: left;
    width: 20%;
    /* border: 1px solid; */
    height: 100%
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