import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './icons'
import VueCurrencyFilter from 'vue-currency-filter'
import router from './router'
import './vee'
// import(/* webpackChunkName: "vee" */ './vee')
// const i18n = () => import(/* webpackChunkName: "i18n" */ './i18n')
// const router = () => import(/* webpackChunkName: "router" */ './router')

Vue.config.productionTip = false

const currencyConfig = {
  symbol: 'Kr.',
  thousandsSeparator: '.',
  fractionCount: 0,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
}

Vue.use(VueCurrencyFilter, currencyConfig)

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
