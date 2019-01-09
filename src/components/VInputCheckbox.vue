<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <fieldset class="govuk-fieldset">
      <label v-if="hasLabel" class="govuk-label" :for="identifier">
        {{label}}
      </label>
      <span v-if="hasHint" class="govuk-hint">
        {{hint}}
      </span>
      <span v-show="errors.has(identifier)" class="govuk-error-message">
        {{ errors.first(identifier) }}
      </span>
      <div class="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input
            class="govuk-checkboxes__input"
            :id="identifier"
            :name="identifier"
            type="checkbox"
            v-validate="validate"
            :data-vv-as="label"
            v-model="internalValue"
          >
          <label class="govuk-label govuk-checkboxes__label">
            <slot></slot>
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
  name: 'VInputCheckbox'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
