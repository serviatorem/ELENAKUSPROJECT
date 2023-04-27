<template>
  <div class="auth container">
    <h2 class="auth__title">
      Регистрация
    </h2>
    <form class="auth__form">
      <label class="auth__form-label">
        Логин
        <input type="text" class="auth__form-input">
      </label>
      <label class="auth__form-label">
        Почта
        <input type="email" class="auth__form-input">
      </label>
      <label class="auth__form-label">
        Пароль
        <input type="password" class="auth__form-input">
      </label>
      <input type="submit" value="Авторизоваться" name="login__button" class="login__button">
    </form>

  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.auth{
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: fit-content;
  text-align: center;
  min-height: 60vh;
  align-items: center;
  justify-content: center;
  &__title{
    font-size: 36px;
  }
  &__form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    border:2px solid black;
    padding: 20px;
    border-radius: 20px;
    &-label{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 5px;
    }
  }
  &__reg{
    span{
      color: blue;
    }
  }
}
.login__button{
  align-self: flex-end;
}
</style>