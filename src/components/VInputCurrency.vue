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
    <input
      class="govuk-input"
      :class="inputWidth"
      type="text"
      :maxlength="maxLength"
      v-model="displayValue"
      @blur="isInputActive = false"
      @focus="isInputActive = true"
    >
    <input
      type="hidden"
      v-model="validatedValue"
      :id="identifier"
      :name="identifier"
      :ref="identifier"
      :data-vv-as="label"
      v-validate="validationRules"
    />
  </div>
</template>

<script>
import VInputText from './VInputText'
export default {
  extends: VInputText,
  name: 'VInputCurrency',
  data () {
    return {
      isInputActive: false
    }
  },
  computed: {
    validatedValue () {
      return this.value
    },
    validationRules () {
      let rules = 'numeric'
      let extraRules = this.validate ? this.validate + '|' : ''
      return extraRules + rules
    },
    displayValue: {
      get: function () {
        if (this.isInputActive) {
          // Cursor is inside the input field. unformat display value for user
          return this.value
        } else {
          return this.$options.filters.currency(this.value)
        }
      },
      set: function (modifiedValue) {
        this.$emit('input', modifiedValue)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
