<template>
  <div class="breadcrumb">
    <a href="">
      glavnaya
    </a>
    <input type="text" name="" id="">
  </div>
</template>

<script>
export default {
  name: 'breadcrumbView'
}
</script>

<style lang="sass" scoped>
.breadcrumb
  margin-bottom: 45px
  position: relative
  &:after
    content: ""
    top: -4px
    left: 0px
    height: 43px
    width: 45px
    position: absolute
    border-bottom: 2px solid #c1c1c1
</style>
