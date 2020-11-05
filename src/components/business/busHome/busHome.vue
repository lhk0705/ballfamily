<template>
<div  ref="busHome">
    <homeHeader></homeHeader>
    <cheaper></cheaper>
    <famousRec></famousRec>
    <guessLike></guessLike>    
    <newStore></newStore>
    <rightBar class="rightBar"></rightBar>
    <button @click="a"></button>
    </div>
</template>

<script>
import homeHeader from "./homeHeader/homeHeader";
import cheaper from "./cheaper";
import famousRec from "./famousRec";
import guessLike from "./guessLike";
import newStore from "./newStore";
import rightBar from "./rightBar";
export default {
    components:{
        homeHeader,cheaper,famousRec,guessLike,newStore,rightBar
    },
    data(){
        return{
            busHome:0           
        }
    },
    methods:{
        a(){
            this.$refs.busHome.scrollTop=100
        }
    }
}
</script>

<style scoped>
.rightBar{ 
    /* margin-top: 50%;        */
    position: fixed;
    top:30%; 
    left:78%;
      overflow: auto;
}

</style>