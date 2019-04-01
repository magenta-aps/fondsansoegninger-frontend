<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <label v-if="hasLabel" class="govuk-label" :for="identifier">
      {{label}}
    </label>
    <div v-if="hasHint" class="govuk-hint" v-html="hint">
    </div>
    <span v-show="errors.has(identifier)" class="govuk-error-message">
      {{ errors.first(identifier) }}
    </span>
    <input
      class="govuk-input"
      :class="inputWidth"
      :id="identifier"
      :name="identifier"
      :data-vv-as="label"
      data-vv-validate-on="blur"
      type="text"
      v-validate="validate"
      :maxlength="maxLength"
      v-model="internalValue"
    >
    <span class="govuk-hint govuk-character-count__message" v-if="maxWordCount">
      Du har {{maxWordCount - wordCount}} ord tilbage.
    </span>
  </div>
</template>

<script>
import VInputBase from './VInputBase'
export default {
  extends: VInputBase,
  name: 'VInputText',
  props: {
    /**
     * change size of input field
     * @default null
     * @type {String|Integer}
     */
    size: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    inputWidth () {
      return this.size ? `govuk-input--width-${this.size}` : ''
    },
    maxLength () {
      const keys = ['max', 'digits']
      let count = null
      let rules = this.validate.split('|')

      for (var i = 0; i < rules.length; i++) {
        for (var j = 0; j < keys.length; j++) {
          if (rules[i].includes(keys[j])) {
            count = rules[i].split(':')[1]
            break
          }
        }
        if (count != null) break
      }
      return count
    },
    maxWordCount () {
      const wcKey = 'word_limit'
      let count = null
      let rules = this.validate.split('|')

      for (var i = 0; i < rules.length; i++) {
        if (rules[i].includes(wcKey)) {
          count = rules[i].split(':')[1]
          break
        }
      }
      return count
    },
    wordCount () {
      if (this.internalValue != null) {
        let list = this.internalValue.split(' ')
        return list[list.length - 1] === '' ? list.length - 1 : list.length
      }
      return 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
