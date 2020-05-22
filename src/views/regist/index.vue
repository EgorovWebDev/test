<template>
  <div class="form form-r">
    <div class="form-title">Регистрация</div>
    <div class="form-info">
      <el-form ref="form-reg" :model="form">
        <el-form-item label="Почта">
          <el-input v-model="form.mail" placeholder="Введите почту" required></el-input>
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input v-model="form.password" placeholder="Введите пароль"></el-input>
        </el-form-item>
        <el-form-item label="Повторите пароль">
          <el-input v-model="form.passwordConfirm" placeholder="Повторите пароль"></el-input>
        </el-form-item>
        <div class="form-agreement">
          <el-checkbox name="type" v-model="form.agreement">
          </el-checkbox>
            <div class="form-agreement__text">Я даю согласие на <router-link :to="{name: 'aagreement'}">обработку персональных даннных</router-link></div>
        </div>
        <div class="form-button__wrapper">
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="button-empty-b">Зарегистрироваться</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="form-link">
      <div class="form-link__text">Уже есть аккаунт?</div>
        <router-link :to="{name: 'auth'}">Войти</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registrarionView',
  data () {
    return {
      form: {
        mail: '',
        password: '',
        passwordConfirm: '',
        agreement: false
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/sass/variables.sass'
.form
  &-agreement
    display: flex
    &__text
      margin-left: 15px
      width: 80%
      &> a
        text-decoration: none
        color: $color-blue
  &-button
    &__wrapper
      text-align: center
      width: 100%
@media all and (max-width: 500px)
  .form
    &-agreement
      align-items: center
      &__text
        width: unset
        font-size: 16px
@media all and (max-width: 450px)
  .form
    &-agreement
      &__text
        font-size: 14px
</style>
