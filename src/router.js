import Vue from 'vue'
import Router from 'vue-router'
import ApplicationForm from './views/ApplicationForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ApplicationForm
    },
    {
      path: '/tak',
      name: 'thankyou',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ThankYou.vue')
    }
  ]
})
