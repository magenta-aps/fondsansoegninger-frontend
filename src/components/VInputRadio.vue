<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
        <label v-if="hasLabel" class="govuk-label">
          {{label}}
        </label>
      </legend>
      <span v-if="hasHint" id="changed-name-hint" class="govuk-hint">
        {{hint}}
      </span>
      <span v-show="errors.has(identifier)" class="govuk-error-message">
        {{ errors.first(identifier) }}
      </span>
      <div class="govuk-radios">
        <div class="govuk-radios__item" v-for="(option, index) in options" :key="index">
          <input class="govuk-radios__input" id="where-do-you-live-1" name="where-do-you-live" type="radio" :value="option.uuid">
          <label class="govuk-label govuk-radios__label" for="where-do-you-live-1">
            {{option.label}}
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import VInputBase from './VInputBase'
export default {
  extends: VInputBase,
  name: 'VInputRadio',
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
