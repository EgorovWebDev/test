<template>
  <div class="objects">
    <ObjectItemView
      v-for="(object, key) in objects"
      :key="key"
      :object="object"
    />
  </div>
</template>

<script>
import ObjectItemView from '@/views/object-item'

export default {
  name: 'objectPage',
  components: {
    ObjectItemView
  },
  data () {
    return {
      objects: [
        {
          id: 1,
          name: 'Жилой комплекс "Западный"',
          adress: 'г.Ростов-на-Дону, улица Садовая, дом 13',
          houses: 1,
          appartaments: 50
        },
        {
          id: 1,
          name: 'Журавль2',
          adress: 'Лупаская пупская',
          houses: 4,
          appartaments: 3
        },
        {
          id: 1,
          name: 'Журавль3',
          adress: 'Лупаская пупская',
          houses: 4,
          appartaments: 3
        },
        {
          id: 1,
          name: 'Журавль4',
          adress: 'Лупаская пупская',
          houses: 4,
          appartaments: 3
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
