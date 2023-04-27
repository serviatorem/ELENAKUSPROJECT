<template>
  <div class="home">
    <AuthHome/>
    <OrderQuestion/>
  </div>
</template>

<script setup>

import OrderQuestion from "../home/OrderQuestion.vue";
import AuthHome from "../auth/AuthHome.vue";
</script>

<style scoped lang="scss">
  .home{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    margin: 30px 0;
    min-height: 50vh;
  }
</style>