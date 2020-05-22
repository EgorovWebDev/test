<template>
  <div class="breadcrumb">
    <el-breadcrumb  separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-if="currentPathRoute === '' || currentPathRoute === '/'">Главная</el-breadcrumb-item>

      <template v-else>
        <el-breadcrumb-item to="/">Главная</el-breadcrumb-item>

        <el-breadcrumb-item
          v-for="(item, key) in activePathRoutes"
          :to="{ path: item.url }"
          :key="key">
          {{ translate[item.name] || item.name }}
        </el-breadcrumb-item>

        <el-breadcrumb-item>{{ translate[currentPathRoute] || currentPathRouteName }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
import { TRANSLATE } from '@/helpers/translate.js'
export default {
  name: 'breadcrumbView',
  data () {
    return {
      currentPathRoute: '',
      activePathRoutes: [],
      translate: TRANSLATE
    }
  },
  methods: {
    getCurrentPath (path) {
      this.activePathRoutes = []
      if (path === '/') {
        this.currentPathRoute = ''
        return
      }

      const notEmptyRoutes = path.split('/').filter((pathItem) => !!pathItem)
      const routesLength = notEmptyRoutes.length

      for (let i = 0; i < routesLength - 1; i++) {
        const name = notEmptyRoutes[i]
        const url = '/' + notEmptyRoutes.slice(0, i + 1).join('/')

        this.activePathRoutes.push({
          name,
          url
        })
      }

      this.currentPathRoute = notEmptyRoutes[routesLength - 1]
    }
  },
  watch: {
    $route (to) {
      this.getCurrentPath(to.path)
    }
  },
  computed: {
    currentPathRouteName () {
      return this.currentPathRoute.replace('/', '')
    }
  },
  mounted () {
    this.getCurrentPath(this.$route.path)
  }
}
</script>

<style lang="sass" scoped>
.breadcrumb
  padding: 25px 0 15px 25px
  margin-bottom: 35px
  border-bottom: 2px solid #333
  width: 98%
</style>
