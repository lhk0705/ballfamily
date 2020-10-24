<template>
  <div class="origin" v-if="status==login">
      <login></login>
  </div>
  <div class="origin" v-else>
      <register></register>
  </div>
</template>

<script>
import login from "./login";
import register from "./register";
export default {
    components:{
        login,register
    }
}
</script>

<style>

</style>