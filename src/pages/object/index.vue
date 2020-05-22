<template>
  <div class="container">
        <objectView
    :v-for="(item, key) in object"
    :key="item.id"
    :item="object"/>
      <div class="object-item">
    <div class="object-item-wrapper">
      <div class="object-item-info">
      <div class="object-item-info__title"><div>{{ object.name }}</div></div>
      <div class="object-item-info__adress">Адрес: <div>{{ object.address }}</div></div>
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
  </div>

</template>

<script>
// import objectView from '@/views/object'

export default {
  name: 'objectPage',
  components: {
    // objectView
  },
  data: () => ({
    object: [
      {
        id: 1,
        name: 'Жилой Комплекс "Западный"',
        address: 'г.Ростов-на-Дону, улица Садовая, дом 13',
        latidude: '12.384',
        longitude: '14.123',
        developer: 'ОАО "СтройПримьер"',
        img: 'kek.lol.ing'
      }
    ]
  })
}
</script>

<style lang="sass" scoped></style>
