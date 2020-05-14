<template>
  <div class="object-item">
    <div class="object-item-info">
      <div class="object-item-info__title"><div>{{ object.name }}</div></div>
      <div class="object-item-info__adress">Адрес: <div>{{ object.adress }}</div></div>
      <div class="object-item-info__houses">Домов: <div>{{ object.houses }}</div></div>
      <div class="object-item-info__appartaments">Квартир: <div>{{ object.appartaments }}</div></div>
      <button class="button button-emptyb">Подробней</button>
    </div>
    <div class="object-item-slider"></div>
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
    width: 95%
    background-color: #c1c1c1
    margin-bottom: 30px
    border-radius: 4px
    padding: 35px
    height: 260px
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
</style>
