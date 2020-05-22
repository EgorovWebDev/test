<template>
  <div class="edit-form">
    <el-form :model="form">
      <el-form-item  label="Название комплекса">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form">
      <el-form-item label="Широта">
        <el-input v-model="form.latitude"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form">
      <el-form-item label="Долгота">
        <el-input v-model="form.longitude"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form">
      <el-form-item label="Адресс">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <div class="current-images">
      <div class="current-images__title">Текущие изображения</div>
     </div>
  </div>

</template>

<script>
export default {
  name: 'editObjectView',
  data () {
    return {
      form: {
        name: '',
        latitude: '',
        longitude: '',
        address: ''
      }
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import '~@/sass/variables.sass'
.current-images
  margin-bottom: 50px
</style>
