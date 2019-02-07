<template>
  <div id="app" class="govuk-template__body">
    <header class="govuk-header " role="banner" data-module="header">
      <div class="govuk-header__container govuk-width-container">
        <div class="govuk-header__logo">
          <a href="#" class="govuk-header__link govuk-header__link--homepage">
            <span class="govuk-header__logotype">
              <img src="./assets/danva-logo.svg" onerror="this.src='./assets/danva-logo.png'">
            </span>
          </a>
        </div>
      </div>
    </header>
    <div class="govuk-width-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
@import "./assets/scss/danva/vars.scss";
@import "./assets/govuk-frontend/src/all.scss";
body {
  margin: 0;
  padding: 0;
}

.govuk-header {
  background: transparent !important;
  border-bottom-color: map-get($danva-colors, "white");
  &__container {
    border-bottom-color: map-get($danva-colors, "dark-blue");
    border-bottom-width:10px;
  }
}

.govuk-header__logotype img {
  width: 260px;
}
</style>
