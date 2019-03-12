<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <fieldset class="govuk-fieldset">
      <label v-if="hasLabel" class="govuk-label sr-only">
        {{label}}
      </label>
      <div v-if="hasHint" class="govuk-hint" v-html="hint">
      </div>
      <span v-show="errors.has(identifier)" class="govuk-error-message">
        {{ errors.first(identifier) }}
      </span>
      <div class="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input
            class="govuk-checkboxes__input"
            :id="identifier"
            :name="identifier"
            :value="checkboxVal"
            type="checkbox"
            v-validate="validate"
            :data-vv-as="label"
            @change="updateInput"
            v-model="internalValue"
          >
          <label class="govuk-label govuk-checkboxes__label" :for="identifier">
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
  name: 'VInputCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  // this is based on https://www.smashingmagazine.com/2017/08/creating-custom-inputs-vue-js/
  // in order to support multiple checkboxes modelling against an array
  props: {
    checkboxVal: {
      type: String,
      default: null
    },
    modelValue: { // if we want to model multiple checkboxes against the same array
      default: false
    },
    // We set `true-value` and `false-value` to the default true and false so
    // we can always use them instead of checking whether or not they are set.
    // Also can use camelCase here, but hyphen-separating the attribute name
    // when using the component will still work
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.checkboxVal)
        } else {
          newValue.splice(newValue.indexOf(this.checkboxVal), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
