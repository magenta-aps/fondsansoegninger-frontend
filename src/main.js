import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VeeValidate, { Validator } from 'vee-validate'
import messagesDA from 'vee-validate/dist/locale/da'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

Vue.config.productionTip = false

const veeConfig = {
  dateFormat: 'DD-MM-YYYY',
  delay: 100,
  locale: 'da',
  inject: false
}

Validator.localize('da', messagesDA)
Vue.use(VeeValidate, veeConfig)
Vue.component('v-icon', Icon)

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
