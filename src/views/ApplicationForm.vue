<template>
  <div class="govuk-!-padding-top-2">
    <form @submit.stop.prevent="submitForm">
      <v-headline :title="$t('applicant')" icon="user"/>
      <v-input-text :label="$t('cvr_no')" validate="required|digits:8|cvr" size="8"/>
      <v-input-text :label="$t('organisation_name')" :hint="$t('organisation_name_hint')" validate="required"/>
      <v-input-text :label="$t('address')" validate="required"/>

      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <v-input-text :label="$t('zip_code')" validate="required|digits:4"/>
        </div>
        <div class="govuk-grid-column-two-thirds">
          <v-input-text :label="$t('city')" validate="required"/>
        </div>
      </div>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('contact_person')" icon="user"/>
      <v-input-text :label="$t('first_name')" :hint="$t('first_name_hint')" validate="required"/>
      <v-input-text :label="$t('last_name')" validate="required"/>
      <v-input-text :label="$t('email')" :hint="$t('email_hint')" validate="required|email"/>
      <v-input-text :label="$t('phone')" :hint="$t('phone_hint')" validate="required|digits:8"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('project')" icon="home"/>
      <v-input-text :label="$t('project_title')" :hint="$t('project_title_hint')" validate="required|max:250"/>
      <v-input-textarea :label="$t('short_project_description')" :hint="$t('short_project_description_hint')" validate="required|word_limit:500"/>
      <v-input-upload :label="$t('in_depth_project_description')" :hint="$t('in_depth_project_description_hint')" validate="required|size:2048"/>
      <v-input-radio :label="$t('category')" :hint="$t('category_hint')" :options="radioOptions" validate="required"/>
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-half">
          <v-input-date :label="$t('expected_project_start')" validate="required"/>
        </div>
        <div class="govuk-grid-column-one-half">
          <v-input-date :label="$t('expected_project_end')" validate="required"/>
        </div>
      </div>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('budget')" icon="dollar-sign"/>
      <v-input-text :label="$t('applied_amount')" validate="required|numeric|decimals:2"/>
      <v-input-upload :label="$t('budget')" validate="required|size:2048"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('documents')" icon="paperclip"/>
      <div class="govuk-inset-text">
        {{$t('all_files_must_be_pdf')}}
      </div>
      <v-input-upload :label="$t('articles_of_association')" :hint="$t('articles_of_association_hint')" validate="required|size:2048"/>
      <v-input-upload :label="$t('board_combination')" :hint="$t('board_combination_hint')" validate="size:2048"/>
      <v-input-upload :label="$t('accountancy')" :hint="$t('accountancy_hint')" validate="size:2048"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('bank_info')" icon="university"/>
      <v-input-text :label="$t('bank_name')" validate="required"/>
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <v-input-text :label="$t('reg_no')" validate="required|max:4"/>
        </div>
        <div class="govuk-grid-column-two-thirds">
          <v-input-text :label="$t('account_no')" validate="required|max:8"/>
        </div>
      </div>
      <v-input-upload :label="$t('bank_account_ownership')" validate="required|size:2048"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('more_info')" icon="file-alt"/>
      <v-input-checkbox :label="$t('consent_declaration')" description="jeg er en samtykkeerklæring" validate="required"/>
      <v-input-checkbox :label="$t('privacy_policy')" description="jeg er en privatlivspolitik" validate="required"/>

      <button type="submit" class="govuk-button govuk-button--start">
        {{$t('send_application')}}
      </button>
    </form>
  </div>
</template>

<script>
import VHeadline from '@/components/VHeadline'
import VInputText from '@/components/VInputText'
import VInputRadio from '@/components/VInputRadio'
import VInputUpload from '@/components/VInputUpload'
import VInputDate from '@/components/VInputDate'
import VInputCheckbox from '@/components/VInputCheckbox'
import VInputTextarea from '@/components/VInputTextarea'

export default {
  name: 'ApplicationForm',
  inject: {
    $validator: '$validator'
  },
  components: {
    VHeadline,
    VInputText,
    VInputRadio,
    VInputUpload,
    VInputDate,
    VInputCheckbox,
    VInputTextarea
  },
  data () {
    return {
      radioOptions: [
        {
          label: 'Initiativer i og for lokalsamfundet',
          uuid: 'some-uuid-1'
        },
        {
          label: 'Udviklingsprojekter for mennesker og samfund',
          uuid: 'some-uuid-2'
        },
        {
          label: 'Sociale formål',
          uuid: 'some-uuid-3'
        },
        {
          label: 'Kulturelle aktiviteter',
          uuid: 'some-uuid-4'
        }
      ]
    }
  },
  computed: {
    /**
     * Loop over all contents of the fields object and check if they exist and valid.
     */
    formValid () {
      return Object.keys(this.fields).every(field => {
        return this.fields[field] && this.fields[field].valid
      })
    }
  },
  methods: {
    submitForm () {
      if (this.formValid) {
        console.log('submit form')
      } else {
        this.$validator.validateAll()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
