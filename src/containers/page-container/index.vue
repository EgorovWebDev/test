<template>
  <div class="page-container">
    <headerView/>
    <div class="page-container-wrapper">
      <breadcrumbView/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerView from '@/views/header/index'
import breadcrumbView from '@/views/breadcrumb/index'

export default {
  name: 'pageContainer',
  components: {
    headerView,
    breadcrumbView
  }
}
</script>

<style lang="sass" scoped>
.page
  &-container
    background-image: url('~@/assets/img/backgroundImg1.png')
    background-size: cover
    display: flex
    flex-direction: column
    align-items: center
    padding-bottom: 20px
    &-wrapper
      width: 1140px
      margin-top: 20px
      background-color: #ffffff
      border-radius: 4px
      position: relative
      box-shadow: -3px 3px 8px 3px rgba(51, 51, 51, 0.29)
</style>
