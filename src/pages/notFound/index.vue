<template>
  <div class="eror-page-container">
    <notFound/>
  </div>
</template>

<script>
import notFound from '@/views/notFound'

export default {
  name: 'notFoundPage',
  components: {
    notFound
  }
}

</script>

<style lang="sass" scoped>
.eror-page-container
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
</style>
