import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VeeValidate, { Validator } from 'vee-validate'
import messagesDA from 'vee-validate/dist/locale/da'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import WordLimit from './validators/WordLimit'
import Cvr from './validators/Cvr'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.config.productionTip = false

const veeConfig = {
  dateFormat: 'DD-MM-YYYY',
  delay: 200,
  locale: 'da',
  inject: false
}

const currencyConfig = {
  symbol: 'kr',
  thousandsSeparator: '.',
  fractionCount: 0,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
}

Validator.localize('da', messagesDA)
Validator.extend('word_limit', WordLimit)
Validator.extend('cvr', Cvr)
Vue.use(VeeValidate, veeConfig)
Vue.use(VueCurrencyFilter, currencyConfig)
Vue.component('v-icon', Icon)

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
