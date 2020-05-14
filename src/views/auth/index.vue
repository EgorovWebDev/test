<template>
  <section class="auth">
    <h3 class="auth-title">Авторизация</h3>
    <form action="" class="auth-form" method="POST">
      <input type="email" name="email" placeholder="Почта">
      <input type="password" name="passwword" placeholder="Пароль">
      <input class="button-emptyb" type="submit" value="Войти">
    </form>
    <div class="auth-registr">Нет аккаунта?
      <router-link :to="{name: 'register'}">
        Зарегистрироваться
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'authorizationView'
}
</script>

<style lang="sass" scoped>
.auth
  width: 650px
  height: 500px
  background-color: #ffffff
  border-radius: 4px
  display: flex
  flex-direction: column
  align-items: center
  &-title
    font-size: 35px
    margin-top: 15px
    position: relative
    &:after
      position: absolute
      content: ''
      width: 650px
      border-bottom: 2px solid #333333
      top: 50px
      left: -217px
      z-index: 1
  &-form
    margin-top: 70px
    display: flex
    flex-direction: column
    position: relative
    &> input
      height: 24px
      border: none
      margin-top: 25px
      width: 300px
      border-bottom: 2px solid #333333
      padding-bottom: 5px
      &::placeholder
        color: #333333
        font-family: 'roboto'
        font-size: 16px
    &>input[type=submit]
      height: 50px
      background: inherit
      border: 2px solid #333333
      font-size: 18px
    &::after
      content: ''
      position: absolute
      bottom: -253px
      left: -125px
      width: 250px
      height: 175px
      background-image: url('~@/assets/img/icons/logo.svg')
      background-repeat: no-repeat
      background-size: contain
  &-registr
    margin-top: 15px
    &>a
      text-decoration: none
      color: #2E64cc
      border-bottom : 2px solid #2E64cc
</style>
