import Vue from 'vue'
import VueRouter from 'vue-router'

const objectsPage = () => import('@/pages/objects/index')
const objectPage = () => import('@/pages/object/index')
const registerPage = () => import('@/pages/register/index')
const authPage = () => import('@/pages/auth/index')
const pageContainer = () => import('@/containers/page-container/index')
const routerViewContainer = () => import('@/containers/router-view/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: authPage
  },
  {
    path: '/register',
    name: 'register',
    component: registerPage
  },
  {
    path: '',
    component: pageContainer,
    children: [
      // ObJECTS
      {
        path: '/objects',
        component: routerViewContainer,
        children: [
          {
            path: '',
            name: 'objects',
            component: objectsPage
          },
          {
            path: ':id',
            name: 'object',
            component: objectPage
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
