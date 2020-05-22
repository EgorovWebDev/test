<template>
  <div class="form form-a">
    <div class="form-title">Авторизация</div>
      <div class="form-info">
      <el-form ref="form-a" :model="auth">
        <el-form-item label="Почта">
          <el-input v-model="auth.mail" placeholder="Введите почту"></el-input>
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input v-model="auth.password" placeholder="Введите почту"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-empty-b">Войти</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-link">
      <div class="form-link__text">Нет аккаунта?</div>
        <router-link :to="{name: 'registration'}">Зарегистрироваться</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authorizationView',
  data () {
    return {
      auth: {
        mail: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.auth)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/sass/variables.sass'
</style>
