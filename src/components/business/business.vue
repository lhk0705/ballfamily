<template>
  <div class="business">
      <heading></heading>
      <router-view></router-view>
  </div>
</template>

<script>
import heading from "./heading";
export default {
    components:{
        heading
    }
}
</script>

<style scoped>
.business{
    margin-bottom: 75px;
}
</style>