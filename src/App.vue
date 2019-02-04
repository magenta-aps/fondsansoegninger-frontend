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
@import "./assets/scss/sparnord/vars.scss";
@import "./assets/govuk-frontend/src/all.scss";

body {
  margin: 0;
  padding: 0;
}

.govuk-header {
  background: transparent !important;
  border-bottom-color: mix(map-get($sparnord-colors, "warm-black"), #fff, 10%); // body background color inside vars.scss
  &__container {
    border-bottom-color: map-get($sparnord-colors, "sparnord-red");
    border-bottom-width:5px;
  }
}

.govuk-header__logotype img {
  width: 200px;
}

.govuk-radios__input + .govuk-radios__label::before,
.govuk-checkboxes__input + .govuk-checkboxes__label::before {
  background:#fff;
}
</style>
