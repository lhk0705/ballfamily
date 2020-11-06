<template>
  <div class="stores">
    <div v-for="item in stores" :key="item.storeId">
      <div class="storesItem">
        <div class="storeLeft">
          <router-link :to="{name:'singleStore',params:{}}">
          <div class="storeLeftImg">
            <img src="./nike.png" alt="" />
          </div>
          <h3>{{ item.storeName }}</h3>
          </router-link>
        </div>
        <div class="storeRight">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stores: [
        {
          storeId: 0,
          storeName: "NIKE旗舰店",
        },
      ],
    };
  },
};
</script>

<style scoped>
.stores {
  width: 80%;
  margin: 0 auto;
}
.storesItem {
  height: 100px;
  border-bottom: solid 1px;
  /* border: solid 1px; */
  padding: 1% ;
}
.storeLeft {
  float: left;
  width: 25%;
  height: 100%;
}
.storeLeft div {
  height: 60%;
}
h3 {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 10%;
}
.storeRight {
  float: right;
  width: 60%;
  height: 100%;
  display: flex;
}
.storeRight div {
  border: 1px solid;
  width: 23%;
  margin: 1%;
}
.storeLeftImg img{
  width: 50%;
  height: 100%;
}
</style>