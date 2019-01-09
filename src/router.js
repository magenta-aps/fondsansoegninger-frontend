import Vue from 'vue'
import Router from 'vue-router'
import ApplicationForm from './views/ApplicationForm'
import ThankYou from './views/ThankYou'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ApplicationForm
    },
    {
      path: '/tak',
      name: 'thankyou',
      component: ThankYou
    }
  ]
})
