<template>
    <div class="singleItem">
        <singleStoreHead class="singleStoreHead"></singleStoreHead>
        <itemInfo class="itemInfoTag"></itemInfo>
        <itemMain class="itemMain"></itemMain>
    </div>
</template>

<script>
import singleStoreHead from "../store/singleStoreHead";
import itemInfo from "./singleItem/itemInfo";
import itemMain from "./singleItem/itemMain";
export default {
components:{
    singleStoreHead,itemInfo,itemMain
}
}
</script>

<style scoped>
.singleItem{
    width: 80%;
    margin: 0 auto;
}
.singleStoreHead{
    width: 100%;
}
.itemInfoTag{
    width: 100%;
    height: 350px;
    position: relative;
    top: 20px;
    /* border: 1px solid; */
}
.itemMain{
    /* height: 350px; */
    width: 90%;
    border: 1px solid;
    margin: 5% auto 0 auto;
}
</style>