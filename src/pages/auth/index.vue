<template>
  <div class="form-container">
    <authorizationView/>
  </div>
</template>

<script>
import authorizationView from '@/views/auth'

export default {
  name: 'authPage',
  components: {
    authorizationView
  }
}
</script>

<style lang="sass" scoped>
</style>
