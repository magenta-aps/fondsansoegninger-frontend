<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <fieldset class="govuk-fieldset" aria-describedby="dob-hint" role="group">
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
        v-model="selected"
      />
      <input
        v-model="selected"
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
import Datepicker from 'vuejs-datepicker'
import { da } from 'vuejs-datepicker/dist/locale'

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
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.calendar-class {
  font-family: Arial, Helvetica, sans-serif;
}

</style>
