<template>
  <div class="govuk-character-count">
    <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
      <label v-if="hasLabel" class="govuk-label" :for="identifier">
        {{label}}
      </label>
      <div v-if="hasHint" class="govuk-hint" v-html="hint">
      </div>
      <span v-show="errors.has(identifier)" class="govuk-error-message">
        {{ errors.first(identifier) }}
      </span>
      <textarea
        class="govuk-textarea"
        v-model="internalValue"
        :id="identifier"
        :name="identifier"
        rows="5"
        v-validate="validate"
        :data-vv-as="label"
      >
      </textarea>
    </div>
    <span class="govuk-hint govuk-character-count__message">
      Du har {{maxWordCount - wordCount}} ord tilbage.
    </span>
  </div>
</template>

<script>
import VInputBase from './VInputBase'
export default {
  extends: VInputBase,
  name: 'VInputTextarea',
  computed: {
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
