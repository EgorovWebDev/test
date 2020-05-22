<template>
  <div class="object">
    <div class="object-wrapper">
      <div class="object-info">
        <div class="object-info__title">Жилой комплекс: {{ name }}</div>
        <div class="object-info__adress">Адресс: {{ object.address }}</div>
        <div class="object-info__latitude">Широта: {{ object.latitude }}</div>
        <div class="object-info__longitude">Долгота: {{ object.longitude }}</div>
        <div class="object-info__developer">Застройщик: {{ object.developer }}</div>
        <div class="object-info-slider">
          <div class="object-info-slider__title">Дома</div>
          <el-carousel :autoplay="false" class="object-info-carousel">
            <el-carousel-item v-for="(image, key) in items" :key="key" class="object-info-carousel__item">
              <img :src="image.path" class="object-carousel-img" alt="Image">
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>
    <div class="object-">
      <img src="image.path" alt="ObjectImg">
    </div>
    </div>
      <div class="object-buttons">
        <el-button type="primary">Назад</el-button>
        <el-button type="primary" plain class="button-fill">Редактировать</el-button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    object: Object
  },
  name: 'objectView'
}
</script>

<style lang="sass" scoped>
.object
  margin-bottom: 20px
  &-buttons
    margin: 60px 0 30px 0
    text-align: center
  &-wrapper
    display: flex
    justify-content: space-between
  &-info
    &__title, &__adress, &__latitude, &__longitude, &__developer
      font-size: 22px
      margin-bottom: 40px
    &-carousel
      &__item
        width: 250px
        heigth: 250px
        background-colo: red
    &-slider
      &__title
        margin-bottom: 25px
  &-carousel
    width: 650px
    height: 450px
    &>img
      width: 100%
      height: 100%
</style>
