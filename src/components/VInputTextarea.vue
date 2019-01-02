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
    <textarea class="govuk-textarea" :id="identifier" :name="identifier" rows="5" v-validate="validate"></textarea>
  </div>
</template>

<script>
import VInputBase from './VInputBase'
export default {
  extends: VInputBase,
  name: 'VInputTextarea'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
