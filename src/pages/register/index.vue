<template>
  <div class="registration">
    <registrationView/>
  </div>
</template>

<script>
import registrationView from '@/views/register'

export default {
  name: 'objectPage',
  components: {
    registrationView
  }
}
</script>

<style lang="sass" scoped>
 .registration
   width: 100vw
   height: 100vh
   background-image: url('~@/assets/img/backgroundImg2.png')
   display: flex
   align-items: center
   justify-content: center
</style>
