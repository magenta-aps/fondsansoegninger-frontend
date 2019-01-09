import Vue from 'vue'
import { Validator, install as VeeValidate } from 'vee-validate/dist/vee-validate.minimal.esm.js'
import { required, max, digits, email, size, numeric, max_value } from 'vee-validate/dist/rules.esm.js'
import veeDa from 'vee-validate/dist/locale/da'
import WordLimit from './validators/WordLimit'
import Cvr from './validators/Cvr'

const veeConfig = {
  dateFormat: 'DD-MM-YYYY',
  delay: 200,
  locale: 'da',
  inject: false
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
