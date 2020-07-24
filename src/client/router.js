import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: () => import('@pages/Home.vue')
}
]

export default new Router({
  mode: 'history',
  routes
})