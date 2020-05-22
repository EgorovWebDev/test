<template>
  <header>
    <div class="header-logo">
      <router-link :to="{name: 'objects'}">
        <img src="@/assets/img/icons/logo.svg" alt="GridHouse">
      </router-link>
    </div>
    <ul class='header-nav'>
      <li>
        <router-link :to="{name: 'objects'}">
          Мои Объекты  <i class="el-icon-office-building"></i>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'users'}">
         Пользователи <i class="el-icon-user"></i>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'settings'}">
          Настройки <i class="el-icon-setting"></i>
        </router-link>
      </li>
    </ul>
    <div class="header-account">
        <router-link :to="{name: 'settings'}">
        <div class="header-account__login">Login</div>
      </router-link>
      <router-link :to="{name: 'auth'}">
        <div class="header-account__exit">
          <img src="@/assets/img/icons/logout.svg" alt="logout">
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerView'
}
</script>

<style lang="sass" scoped>
header
  width: 100%
  height: 83px
  background-color: #ffffff
  display: flex
  justify-content: space-around
  align-items: center
  font-family: 'roboto'
ul
  display: flex
  justify-content: space-between
  & > li
    margin: 0 26px
a
  font-family: 'roboto'
  font-size: 18px
  text-decoration: none
  color: #000000
  &:hover
    transition: .5s
    color: #D8C200
i
  margin-left: 6px
  font-size: 24px
.header
  &-account
    display: flex
    &__exit
      img
        width: 24px
        height: 24px
        margin-top: -2px
    &__login
      margin-right: 15px
</style>
