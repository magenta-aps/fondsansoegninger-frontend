<template>
  <div>
    <h1 class="govuk-heading-xl govuk-!-padding-top-9">
      Tak for din ansøgning
    </h1>
    <p>
      Vi har sendt en bekræftelsesmail til kontaktpersonens e-mailadresse.
    </p>
  </div>
</template>

<script>
export default {
  name: 'VHeadline',
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

</style>
