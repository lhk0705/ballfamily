<template>
    <div class="singleItem">
        <singleStoreHead class="singleStoreHead" :storeName='storeName'></singleStoreHead>
        <itemInfo class="itemInfoTag"></itemInfo>
        <itemMain class="itemMain"></itemMain>
    </div>
</template>

<script>
import singleStoreHead from "../store/singleStoreHead";
import itemInfo from "./singleItem/itemInfo";
import itemMain from "./singleItem/itemMain";
export default {
    beforeRouteEnter:(to,from,next)=>{
        // if(from.path==='/items'){
            next((vm)=>{
                console.log(vm.$route.params);
                vm.storeName=vm.$route.params.storeName
                // console.log(vm.storeName);
            })
        // }
    },
    
components:{
    singleStoreHead,itemInfo,itemMain
},
data(){
    return{
        storeName:''
    }
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