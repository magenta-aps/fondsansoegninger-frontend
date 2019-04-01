<template>
  <div>
  <h1 class="govuk-heading-xl govuk-!-padding-top-9">Ansøgning til Spar Nord Fonden</h1>
  <div class="govuk-!-padding-top-2">
    <form @submit.stop.prevent="submitForm">
      <v-headline :title="$t('applicant')" icon="user"/>
      <v-input-text v-model="application.applicant.cvr_no" :label="$t('cvr_no')" validate="required|digits:8|cvr" size="8"/>
      <v-input-text v-model="application.applicant.organisation_name" :label="$t('organisation_name')" :hint="$t('organisation_name_hint')" validate="required"/>
      <v-input-text v-model="application.applicant.address" :label="$t('address')" validate="required"/>

      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <v-input-text v-model="application.applicant.zip_code" :label="$t('zip_code')" validate="required|digits:4"/>
        </div>
        <div class="govuk-grid-column-two-thirds">
          <v-input-text v-model="application.applicant.city" :label="$t('city')" validate="required"/>
        </div>
      </div>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('contact_person')" icon="user"/>
      <v-input-text v-model="application.contact_person.first_name" :label="$t('first_name')" :hint="$t('first_name_hint')" validate="required"/>
      <v-input-text v-model="application.contact_person.last_name" :label="$t('last_name')" validate="required"/>
      <v-input-text v-model="application.contact_person.email" :label="$t('email')" :hint="$t('email_hint')" validate="required|email"/>
      <v-input-text v-model="application.contact_person.phone" :label="$t('phone')" :hint="$t('phone_hint')" validate="required|digits:8"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('project')" icon="home"/>
      <v-input-text v-model="application.project.project_title" :label="$t('project_title')" :hint="$t('project_title_hint')" validate="required|max:250"/>
      <v-input-textarea v-model="application.project.short_project_description" :label="$t('short_project_description')" :hint="$t('short_project_description_hint')" validate="required|word_limit:500"/>
      <v-input-upload v-model="application.project.in_depth_project_description" :label="$t('in_depth_project_description')" :hint="$t('in_depth_project_description_hint')" validate="required|size:2048"/>
      <v-input-radio v-model="application.project.category" :label="$t('category')" :hint="$t('category_hint')" :options="radioOptions" validate="required"/>
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-half">
          <v-input-date v-model="application.project.expected_project_start" :label="$t('expected_project_start')" validate="required"/>
        </div>
        <div class="govuk-grid-column-one-half">
          <v-input-date v-model="application.project.expected_project_end" :label="$t('expected_project_end')" validate="required"/>
        </div>
      </div>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('budget')" icon="dollar-sign"/>
      <v-input-currency v-model="application.budget.applied_amount" :label="$t('applied_amount')" validate="required" size="10"/>
      <v-input-upload v-model="application.budget.budget" :label="$t('budget')" validate="required|size:2048"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('documents')" icon="paperclip"/>
      <div class="govuk-inset-text">
        {{$t('all_files_must_be_pdf')}}
      </div>
      <v-input-upload v-model="application.documents.articles_of_association" :label="$t('articles_of_association')" :hint="$t('articles_of_association_hint')" validate="required|size:2048"/>
      <v-input-upload v-model="application.documents.board_combination" :label="$t('board_combination')" :hint="$t('board_combination_hint')" validate="size:2048"/>
      <v-input-upload v-model="application.documents.accountancy" :label="$t('accountancy')" :hint="$t('accountancy_hint')" validate="size:2048"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('bank_info')" icon="university"/>
      <v-input-text v-model="application.bank_info.bank_name" :label="$t('bank_name')" validate="required"/>
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <v-input-text v-model="application.bank_info.reg_no" :label="$t('reg_no')" validate="required|max:4"/>
        </div>
        <div class="govuk-grid-column-two-thirds">
          <v-input-text v-model="application.bank_info.account_no" :label="$t('account_no')" validate="required|max:8"/>
        </div>
      </div>
      <v-input-upload v-model="application.bank_info.bank_account_ownership" :label="$t('bank_account_ownership')" validate="required|size:2048"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('more_info')" icon="file-alt"/>
      <v-input-checkbox v-model="application.more_info.consent_declaration" :checkboxVal="$t('consent_declaration')" validate="required" :label="$t('consent_declaration')">
        jeg er en <a href="#">samtykkeerklæring</a>
      </v-input-checkbox>
      <v-input-checkbox v-model="application.more_info.privacy_policy" :checkboxVal="$t('privacy_policy')" validate="required" :label="$t('privacy_policy')">
        jeg er en privatlivspolitik
      </v-input-checkbox>

      <button type="submit" class="govuk-button govuk-button--start">
        {{$t('send_application')}}
      </button>
    </form>
  </div>
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
import VInputCurrency from '@/components/VInputCurrency'
import Api from '@/api'

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
    VInputTextarea,
    VInputCurrency
  },
  data () {
    return {
      application: {
        applicant: {},
        contact_person: {},
        project: {},
        budget: {},
        documents: {},
        bank_info: {},
        more_info: {}
      },
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
        this.postToBackend()
      } else {
        this.$validator.validateAll()
      }
    },

    postToBackend () {
      Api.sendApplication(this.parsedApplication)
        .then(response => {
          this.$router.push({ name: 'thankyou' })
        })
    },

    isDate(date) {
      return date instanceof Date
    },

    pad (n, width, z) {
      return (String(z).repeat(width) + String(n)).slice(String(n).length)
    },

    checkTranslation(key) {
      return this.$te(key) ? this.$t(key) : key // if a translation exists, use it. Otherwise just use the key
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
