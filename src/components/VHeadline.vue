<template>
  <div>
    <h2 class="govuk-heading-l">
      <v-icon v-if="hasIcon" :name="icon" scale="2"/>
      {{title}}
    </h2>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'VHeadline',
  components: {
    'v-icon': Icon
  },
  props: {
    /**
     * the title
     * @type {String}
     * @default null
     */
    title: String,
    /**
     * font awesome icon name
     * @type {String}
     * @default null
     */
    icon: String
  },
  computed: {
    hasIcon () {
      return this.icon != null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/sparnord/vars.scss";

.fa-icon {
  color:mix(map-get($sparnord-colors, "warm-black"), #fff, 70%);
}
</style>
