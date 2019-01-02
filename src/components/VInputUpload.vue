<template>
  <div class="govuk-form-group" :class="errors.has(identifier) ? 'govuk-form-group--error' : ''">
    <label v-if="hasLabel" class="govuk-label" :for="identifier">
      {{label}}
    </label>
    <span v-if="hasHint" id="changed-name-hint" class="govuk-hint">
      {{hint}}
    </span>
    <span v-show="errors.has(identifier)" class="govuk-error-message">
      {{ errors.first(identifier) }}
    </span>
    <input class="govuk-file-upload" :id="identifier" :name="identifier" type="file" accept="application/pdf">
  </div>
</template>

<script>
import VInputBase from './VInputBase'
export default {
  extends: VInputBase,
  name: 'VInputUpload',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
