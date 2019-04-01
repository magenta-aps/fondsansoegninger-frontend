<template>
  <div id="app" class="govuk-template__body">
    <header class="govuk-header " role="banner" data-module="header">
      <div class="govuk-header__container govuk-width-container">
        <div class="govuk-header__logo">
          <a href="#" class="govuk-header__link govuk-header__link--homepage">
            <span class="govuk-header__logotype">
              <img src="./assets/logo.svg" onerror="this.src='./assets/logo-fallback.png'">
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
@import "./assets/scss/sparnord/fonts.scss";
@import "./assets/scss/sparnord/vars.scss";
@import "./assets/govuk-frontend/src/all.scss";
@import "./assets/scss/overrides.scss";
body {
  margin: 0;
  padding: 0;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
.govuk-header {
  background: transparent !important;
  border-bottom-color: mix(map-get($sparnord-colors, "warm-black"), #fff, 10%); // body background color inside vars.scss
  &__container {
    border-bottom-color: map-get($sparnord-colors, "sparnord-red");
    border-bottom-width:5px;
  }
  &__link--homepage:hover {
    border-bottom:none;
  }
}
.govuk-header__logotype img {
  width: 260px;
  height: 100%;
}
</style>
