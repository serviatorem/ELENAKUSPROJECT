<template>
  <header class="header">
      <div class = 'container header__content'>
          <div class="header__content-logo-wrapper">
            <RouterLink :to="{name: 'home'}"><img src="src/assets/images/logo.gif" alt="logo" class="header__content-logo"></RouterLink>
          </div>
        <div class="header__content-button-wrapper">
          <button class="header__content-button">
              ВЫХОД НАХУЙ
          </button>
        </div>
      </div>
  </header>
</template>

<script setup lang="js">

</script>

<style scoped lang="scss">
  .header{
    background: black;
    &__content{
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-logo{
        height: 80px;
      }
      &-button{
        border: 2px solid white;
        border-radius: 5px;
        cursor: pointer;
        padding: 5px 10px;
        outline: none;
        background: rgba(1,1,1,0);
        color: whitesmoke;
      }
    }
  }
</style>