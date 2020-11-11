<template>
    <div class="shoesShow">
        <div class="man">
        <div><h3>男装</h3></div>
        <ul>
            <li>T恤</li>
            <li>衬衫</li>
            <li>POLO衫</li>
            <li>毛衣</li>            
        </ul>
        <ul>
            <li>短裤</li>
            <li>长裤</li>
            <li>内裤</li>           
        </ul>
        </div>
        <div class="man">
        <div><h3>女装</h3></div>
        <ul>
            <li>T恤</li>
            <li>衬衫</li>
            <li>POLO衫</li>
            <li>毛衣</li>            
        </ul>
        <ul>
            <li>短裤</li>
            <li>长裤</li>
            <li>内裤</li>           
        </ul>
        </div>
        <div class="man">
        <div><h3>童装</h3></div>
        <ul>
            <li>T恤</li>
            <li>衬衫</li>
            <li>POLO衫</li>
            <li>毛衣</li>            
        </ul>
        <ul>
            <li>短裤</li>
            <li>长裤</li>
            <li>内裤</li>           
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
    height: 8px;
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