<template>
  <section class="registr">
    <h3 class="registr-title">Регистрация</h3>
    <form class="registr-form" action="" method="POST">
      <input type="email" name="email" placeholder="Почта">
      <input type="password" name="password" placeholder="Пароль">
      <input type="password" name="password2" placeholder="Повторите пароль">
      <div class="registr-agreement">
        <input type="checkbox" name="agreement" >
        <label for="">Я принимаю и даю согласие на
        </label>
          <router-link :to="{name: 'agreement'}">
            обработку <span>персональных данных</span>
          </router-link>
      </div>
      <input class="button-emptyb" type="submit" value="Зарегистрироваться">
    </form>
    <div class="registr-auth">Уже есть акаунт?
      <router-link :to="{name: 'auth'}">
        Войти
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'registrarionView'
}
</script>

<style lang="sass" scoped>
.registr
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
      left: -220px
      z-index: 1
  &-form
    margin-top: 55px
    display: flex
    flex-direction: column
    position: relative
    &::after
      content: ''
      position: absolute
      bottom: -165px
      left: -120px
      width: 250px
      height: 175px
      background-image: url('~@/assets/img/icons/logo.svg')
      background-repeat: no-repeat
      background-size: contain
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
  &-agreement
    margin-top: 20px
    max-width: 320px
    z-index: 4
    font-size: 13px
  &-auth
    margin-top: 15px
    font-size: 14px
    &>a
      color: #2E64cc
      text-decoration: none
      border-bottom : 2px solid #2E64cc
</style>
