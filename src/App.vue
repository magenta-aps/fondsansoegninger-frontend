<template>
  <div id="app">
    <header class="govuk-header " role="banner" data-module="header">
  <div class="govuk-header__container govuk-width-container">

    <div class="govuk-header__logo">
      <a href="#" class="govuk-header__link govuk-header__link--homepage">
        <span class="govuk-header__logotype">
          <span class="govuk-header__logotype-text">
            Spar Nord Fonden
          </span>
        </span>
      </a>
    </div>
  </div>
</header>
  <div class="govuk-width-container">
    <application-form/>
  </div>
  </div>
</template>

<script>
import ApplicationForm from '@/views/ApplicationForm'
export default {
  name: 'app',
  components: {
    ApplicationForm
  }
}
</script>

<style lang="scss">
@import "./assets/govuk-frontend/src/all.scss";
body {
  margin: 0;
  padding: 0;
}
</style>
