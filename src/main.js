import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
// import VeeValidate, { Validator } from 'vee-validate'
import { Validator, install as VeeValidate } from 'vee-validate/dist/vee-validate.minimal.esm.js'
import { required, max, digits, email, size, numeric, max_value } from 'vee-validate/dist/rules.esm.js'
import veeDa from 'vee-validate/dist/locale/da'
import Icon from 'vue-awesome/components/Icon'
import './icons'
import WordLimit from './validators/WordLimit'
import Cvr from './validators/Cvr'
import VueCurrencyFilter from 'vue-currency-filter'
import router from './router'

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

Validator.localize('da', veeDa)
Validator.extend('required', required)
Validator.extend('max', max)
Validator.extend('digits', digits)
Validator.extend('email', email)
Validator.extend('size', size)
Validator.extend('numeric', numeric)
Validator.extend('max_value', max_value)
Validator.extend('word_limit', WordLimit)
Validator.extend('cvr', Cvr)
Vue.use(VeeValidate, veeConfig)
Vue.use(VueCurrencyFilter, currencyConfig)
Vue.component('v-icon', Icon)

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
