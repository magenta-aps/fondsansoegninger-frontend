<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <fieldset class="govuk-fieldset" role="group">
      <label v-if="hasLabel" class="govuk-label" :for="identifier">
      {{label}}
      </label>
      <span v-if="hasHint" class="govuk-hint">
        {{hint}}
      </span>
      <span v-show="errors.has(identifier)" class="govuk-error-message">
        {{ errors.first(identifier) }}
      </span>
      <datepicker
        input-class="govuk-input"
        calendar-class="govuk-body"
        :language="da"
        format="dd-MM-yy"
        monday-first
        v-model="internalValue"
      />
      <input
        v-model="internalValue"
        v-validate="validate"
        :name="identifier"
        :id="identifier"
        :data-vv-as="label"
        type="hidden"
      />
    </fieldset>
  </div>
</template>

<script>
import VInputBase from './VInputBase'
// import Datepicker from 'vuejs-datepicker'
import { da } from 'vuejs-datepicker/dist/locale'
const Datepicker = () => import(/* webpackChunkName: "datepicker" */ 'vuejs-datepicker')

export default {
  extends: VInputBase,
  name: 'VInputDate',
  components: {
    Datepicker
  },
  data () {
    return {
      da: da,
      selected: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
