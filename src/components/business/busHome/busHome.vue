<template>
<div>
    <homeHeader></homeHeader>
    <cheaper></cheaper>
    <famousRec></famousRec>
    <guessLike></guessLike>
    <newStore></newStore>
    </div>
</template>

<script>
import homeHeader from "./homeHeader/homeHeader";
import cheaper from "./cheaper";
import famousRec from "./famousRec";
import guessLike from "./guessLike";
import newStore from "./newStore";
export default {
    components:{
        homeHeader,cheaper,famousRec,guessLike,newStore
    }
}
</script>

<style>

</style>