<template>
  <div>
      <heading class="h"></heading>
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

<style>
.h{
    border-bottom: 1px solid;
}
</style>