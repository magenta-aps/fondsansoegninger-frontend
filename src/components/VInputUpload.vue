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
    <div>
      <div class="file-upload govuk-button">
        <v-icon name="cloud-upload-alt" scale="2"/>
        <input
          type="file"
          class="upload"
          :id="identifier"
          :name="identifier"
          :ref="identifier"
          accept="application/pdf"
          v-validate="validate"
          :data-vv-as="label"
          @change="onChange($event)"
        />
      </div>
      <span class="govuk-body govuk-!-padding-left-2">
        <span v-if="!fileName">Tilføj din fil</span>
        <span v-else><i>{{fileName}}</i></span>
      </span>
    </div>
  </div>
</template>

<script>
import VInputBase from './VInputBase'
import Icon from 'vue-awesome/components/Icon'

export default {
  extends: VInputBase,
  name: 'VInputUpload',
  components: {
    'v-icon': Icon
  },
  data () {
    return {
      fileName: null
    }
  },
  methods: {
    onChange (event) {
      let file = event.target.files[0]
      this.fileName = file.name
      this.$emit('input', file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.govuk-body {
  line-height: 48px;
}

.govuk-button {
  background-color: #023671;

  &:hover {
    background-color: lighten(#023671, 10%)
  }
}

.file-upload {
    position: relative;
    overflow: hidden;

  input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
  }
}

</style>
