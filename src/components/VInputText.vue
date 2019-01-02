<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <label v-if="hasLabel" class="govuk-label" :for="identifier">
      {{label}}
    </label>
    <span v-if="hasHint" class="govuk-hint">
      {{hint}}
    </span>
    <span v-show="errors.has(identifier)" class="govuk-error-message">
      {{ errors.first(identifier) }}
    </span>
    <input class="govuk-input" :class="inputWidth" :id="identifier" :name="identifier" :data-vv-as="label" type="text" v-validate="validate">
  </div>
</template>

<script>
import VInputBase from './VInputBase'
export default {
  extends: VInputBase,
  name: 'VInputText',
  props: {
    size: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    inputWidth () {
      return this.size ? `govuk-input--width-${this.size}` : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
