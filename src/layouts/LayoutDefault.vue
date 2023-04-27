<template>
  <TheHeader/>
  <main>
    <div class="wrapper">
      <slot/>
    </div>
  </main>
  <TheFooter/>
</template>

<script setup>
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";


</script>

<style scoped lang="scss">
  .wrapper{

  }
</style>