<template>
  <div class="authorization">
    <authorizationView/>
  </div>
</template>

<script>
import authorizationView from '@/views/auth'

export default {
  name: 'objectPage',
  components: {
    authorizationView
  }
}
</script>

<style lang="sass" scoped>
 .authorization
   width: 100vw
   height: 100vh
   background-image: url('~@/assets/img/backgroundImg2.png')
   display: flex
   align-items: center
   justify-content: center
</style>
