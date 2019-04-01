<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
        <label v-if="hasLabel" class="govuk-label">
          {{label}}
        </label>
      </legend>
      <div v-if="hasHint" class="govuk-hint" v-html="hint">
      </div>
      <span v-show="errors.has(identifier)" class="govuk-error-message">
        {{ errors.first(identifier) }}
      </span>
      <div class="govuk-radios">
        <div class="govuk-radios__item" v-for="(option, index) in options" :key="index">
          <input
            class="govuk-radios__input"
            :id="identifier+'-'+index"
            :name="identifier"
            type="radio"
            :value="option.uuid"
            v-validate="validate"
            :data-vv-as="label"
            v-model="internalValue"
          >
          <label class="govuk-label govuk-radios__label" :for="identifier+'-'+index">
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
