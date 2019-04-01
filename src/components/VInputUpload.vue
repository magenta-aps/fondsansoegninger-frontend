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
    <div>
      <span class="file-upload">
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
        <v-icon name="file-alt" scale="1.75"/>
      </span>
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
      this.fileName = file ? file.name : null
      this.$emit('input', file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/sparnord/vars.scss";

.govuk-body {
  line-height: 48px;
}

.file-upload {
  position: relative;
  overflow: hidden;
  display:inline-block;
  vertical-align:text-bottom;
  input.upload {
    position: absolute;
    top: 0;
    right: 0;
    bottom:0;
    left:0;
    width:100%;
    margin: 0;
    padding: 0;
    font-size: 20px;
    z-index:1;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
  }
  .fa-icon {
    z-index:0;
    display:block;
    color: map-get($sparnord-colors, "fresh-red");
    cursor: pointer;
  }
  input.upload:focus + .fa-icon,
  input.upload:hover + .fa-icon {
    color: mix(map-get($sparnord-colors, "fresh-red"), #fff, 60%);
  }
}

</style>
