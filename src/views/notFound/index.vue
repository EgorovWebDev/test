<template>
 <div class="page-eror">
  <h3 class="page-eror-number">4<span>0</span>4</h3>
  <div class="page-eror-info">
    <div class="page-eror__title">Страница не найдена</div>
    <div class="page-eror__description">Адрес набран неверно или такой страницы не существует</div>
    <div class="page-eror__button">
        <router-link :to="{name: 'objects'}" tag="button" class="button-eror">Вернуться на главную</router-link>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '~@/sass/variables.sass'
.page-eror
  display: flex
  margin: 0 auto
  &-info
    margin-left: 40px
    display: flex
    justify-content: space-around
    flex-direction: column
  &-number
    text-align: center
    font-size: 250px
    &>span
      color: $color-yellow
  &__title
    font-size: 36px
  &__description
    text-align: center
    font-size: 24px
  &__button
    &>button
      font-family: 'Roboto'
      font-size: 20px
      border: none
      width: 250px
      height: 50px
      border-radius: 4px
      color: $color-dark
      background-color: $color-yellow
      outline: none
      &:hover
        transform: scale(1.07)
        transition: .2s
@media all and (max-width: 1000px)
  .page-eror
    flex-direction: column
    &-info
      margin-left: 0px
    &__title
      text-align: center
    &__description
      text-align-last: center
      margin-top: 15px
    &__button
      text-align: center
      margin-top: 15px
      &>button
        &:hover
          transform: none
          transtiion: none
@media all and (max-width: 400px)
  .page-eror
    &-number
      font-size: 144px
</style>
