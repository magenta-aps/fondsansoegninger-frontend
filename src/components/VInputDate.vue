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
      <div class="govuk-date-input" :id="identifier">
        <div class="govuk-date-input__item">
          <div class="govuk-form-group">
            <label class="govuk-label govuk-date-input__label" :for="identifier + '-day'">
              {{$t('day')}}
            </label>
            <input
              class="govuk-input govuk-date-input__input govuk-input--width-2"
              v-model="day"
              :id="identifier + '-day'"
              :name="identifier + '-day'"
              type="number"
              pattern="[0-9]*"
            >
          </div>
        </div>
        <div class="govuk-date-input__item">
          <div class="govuk-form-group">
            <label class="govuk-label govuk-date-input__label" :for="identifier + '-month'">
              {{$t('month')}}
            </label>
            <input
              class="govuk-input govuk-date-input__input govuk-input--width-2"
              v-model="month"
              :id="identifier + '-month'"
              :name="identifier + '-month'"
              type="number"
              pattern="[0-9]*"
            >
          </div>
        </div>
        <div class="govuk-date-input__item">
          <div class="govuk-form-group">
            <label class="govuk-label govuk-date-input__label" :for="identifier + '-year'">
              {{$t('year')}}
            </label>
            <input
              class="govuk-input govuk-date-input__input govuk-input--width-4"
              v-model="year"
              :id="identifier + '-year'"
              :name="identifier + '-year'"
              type="number"
              pattern="[0-9]*"
            >
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import VInputBase from './VInputBase'
export default {
  extends: VInputBase,
  name: 'VInputDate',
  data () {
    return {
      day: null,
      month: null,
      year: null
    }
  },
  computed: {
    date () {
      // return 'hello world' + this.day
      return this.day + '-' + this.month + '-' + this.year
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
