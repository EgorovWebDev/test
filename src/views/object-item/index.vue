<template>
  <div class="object-item">
    <div class="object-item-wrapper">
      <div class="object-item-info">
      <div class="object-item-info__title"><div>{{ object.name }}</div></div>
      <div class="object-item-info__adress">Адрес: <div>{{ object.adress }}</div></div>
      <div class="object-item-info__houses">Домов: <div>{{ object.houses }}</div></div>
      <div class="object-item-info__appartaments">Квартир: <div>{{ object.appartaments }}</div></div>
      <div class="object-item-info__buttons">
        <button class="button button-emptyb">Подробней</button>
        <button class="button button-emptyb button-edit">Редактировать</button>
      </div>
    </div>
      <div class="object-item-slider"></div>
      <div class="object-item-slider__title">Дома</div>
        <el-carousel :autoplay="false" class="object-info-carousel">
          <el-carousel-item v-for="(image, key) in items" :key="key" class="object-info-carousel__item">
            <img :src="image.path" class="object-carousel-img" alt="Image">
          </el-carousel-item>
          </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'objectItemView',
  props: {
    object: Object
  }
}
</script>

<style lang="sass" scoped>
.object
  &-item
    width: 85%
    margin: 0 auto
    background-color: #ffffff
    // background-image: url('~@/assets/img/backgroundImg1.png')
    // background-size: cover
    margin-bottom: 30px
    border-radius: 4px
    padding: 35px
    height: 260px
    font-family: 'Roboto'
    box-shadow: -3px 3px 8px 3px rgba(51, 51, 51, 0.29)
    &-info
      &__title
        font-size: 24px
        margin-bottom: 40px
      &__adress, &__houses, &__appartaments
        display: flex
        font-size: 18px
        margin-bottom: 15px
        & > div
          margin-left: 20px
      &> .button-emptyb
        margin-top: 35px
      &__buttons
        margin-top: 50px
    &-wrapper
      display: flex
      justify-content: space-between
.button
  &-edit
    margin-left: 20px
</style>
