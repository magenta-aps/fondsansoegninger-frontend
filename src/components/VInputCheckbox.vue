<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <fieldset class="govuk-fieldset">
      <label v-if="hasLabel" class="govuk-label" :for="identifier">
        {{label}}
      </label>
      <span v-if="hasHint" id="changed-name-hint" class="govuk-hint">
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
            value="x"
            v-validate="validate"
            :data-vv-as="label"
          >
          <label class="govuk-label govuk-checkboxes__label">
            {{description}}
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
  name: 'VInputUpload',
  props: {
    /**
     * Set a description next to checkbox
     * @default null
     * @type {String}
     */
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
