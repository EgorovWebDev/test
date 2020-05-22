import Vue from 'vue'
import VueRouter from 'vue-router'

const routerViewContainer = () => import('@/containers/router-view/index')
const pageContainer = () => import('@/containers/page-container/index')
const objectsPage = () => import('@/pages/objects/index')
const objectPage = () => import('@/pages/object/index')
const editObjectPage = () => import('@/pages/editObject/index')
const registrationPage = () => import('@/pages/regist/index')
const authPage = () => import('@/pages/auth/index')
const notFoundPage = () => import('@/pages/notFound/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    component: notFoundPage
  },
  {
    path: '/auth',
    name: 'auth',
    component: authPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: registrationPage
  },
  {
    path: '',
    redirect: '/objects',
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
          },
          {
            path: ':id/edit',
            name: 'editObject',
            component: editObjectPage
          },
          {
            path: 'new',
            name: 'newObject'
            // component: newObjectPage
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
