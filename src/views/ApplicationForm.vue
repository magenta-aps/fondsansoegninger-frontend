<template>
  <div>
  <h1 class="govuk-heading-xl govuk-!-padding-top-9">Ansøgning til VUDP</h1>
  <div class="govuk-body">
    <p>
      <a href="./2019-vudp-ansoegningsvejledning-fase1.pdf" target="_blank">{{ $t('application_guide') }} (pdf)</a>
    </p>
    <form @submit.stop.prevent="submitForm" class="govuk-!-padding-top-4">
      <v-headline :title="$t('applicant')" icon="user"/>
      <v-input-text v-model="application.company_name" :label="$t('company_name') + ' (' + $t('main_applicant') + ')'" validate="required"/>
      <v-input-text v-model="application.address" :label="$t('address')" validate="required"/>

      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <v-input-text v-model="application.zip_code" :label="$t('zip_code')" validate="required|digits:4"/>
        </div>
        <div class="govuk-grid-column-two-thirds">
          <v-input-text v-model="application.city" :label="$t('city')" validate="required"/>
        </div>
      </div>
      <v-input-text v-model="application.cvr_no" :label="$t('cvr_no')" validate="required|digits:8|cvr" size="8"/>

      <v-input-text v-model="application.contact_name" :label="$t('contact_name')" :hint="$t('contact_name_hint')" validate="required"/>
      <v-input-text v-model="application.contact_email" :label="$t('contact_email')" validate="required|email"/>
      <v-input-text v-model="application.contact_phone" :label="$t('contact_phone')" validate="required|digits:8"/>

      <h3 class="govuk-heading-m">Øvrige projektpartner(e)</h3>
      <template v-for="(partner, idx) in application.partners">
        <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">
        <button v-if="idx > 0" type="button" @click="removePartner(partner.id)" class="govuk-button">
          {{ $t('remove_partner') }}
        </button>
        <v-input-text v-model="partner.company_name" :label="$t('company_name')" validate="required" :key="'partner-name-' + partner.id"/>
        <v-input-text v-model="partner.cvr_no" :label="$t('cvr_no')" validate="required|digits:8|cvr" size="8" :key="'partner-cvr-' + partner.id"/>
        <v-input-text v-model="partner.contact_person" :label="$t('contact_person')" validate="required" :key="'partner-contactperson-' + partner.id"/>
        <v-input-text v-model="partner.project_role" :label="$t('project_role')" :hint="$t('project_role_hint')" validate="required|word_limit:15" :key="'partner-role-' + partner.id"/>
      </template>

      <button type="button" @click="addPartner" class="govuk-button govuk-button--start">
        {{ $t('add_partner') }}
      </button>

      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('project')" icon="home"/>
      <v-input-textarea v-model="application.project_title" :label="$t('project_title')" :hint="$t('project_title_hint')" validate="required|word_limit:150"/>
      <span class="govuk-label">{{ $t('subject') }}</span>
      <span class="govuk-hint">{{ $t('subject_hint') }}</span>
      <template v-for="(subject, index) in subjects">
        <v-input-checkbox v-model="application.subject" :checkboxVal="subject.label" validate="" :label="subject.label">
          {{ subject.label }}
        </v-input-checkbox>
      </template>

      <v-input-textarea v-model="application.project_idea" :label="$t('project_idea')" :hint="$t('project_idea_hint')" validate="required|word_limit:470"/>
      <v-input-textarea v-model="application.project_argument" :label="$t('project_argument')" :hint="$t('project_argument_hint')" validate="required|word_limit:70"/>
      <v-input-textarea v-model="application.project_output" :label="$t('project_output')" :hint="$t('project_output_hint')" validate="required|word_limit:70"/>
      <v-input-textarea v-model="application.project_newsworthy" :label="$t('project_newsworthy')" :hint="$t('project_newsworthy_hint')" validate="required|word_limit:140"/>
      <v-input-textarea v-model="application.project_benefit" :label="$t('project_benefit')" :hint="$t('project_benefit_hint')" validate="required|word_limit:70"/>
      <v-input-textarea v-model="application.project_sustainability" :label="$t('project_sustainability')" :hint="$t('project_sustainability_hint')" validate="required|word_limit:140"/>

      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('project_period') + ' ' + $t('and') + ' ' + $t('budget').toLowerCase()" icon="dollar-sign"/>

      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-half">
          <v-input-date v-model="application.start_date" :label="$t('expected_project_start')" :hint="$t('expected_project_start_hint')" validate="required"/>
        </div>
        <div class="govuk-grid-column-one-half">
          <v-input-date v-model="application.end_date" :label="$t('expected_project_end')" :hint="$t('expected_project_end_hint')" validate="required"/>
        </div>
      </div>

      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-half">
          <v-input-currency v-model="application.applied_amount" :label="$t('total_budget')" :hint="$t('total_budget_hint')" validate="required" size="10"/>
        </div>
        <div class="govuk-grid-column-one-half">
          <v-input-currency v-model="application.total_budget" :label="$t('applied_amount')" :hint="$t('applied_amount_hint')" validate="required|max_value:1500000" size="10"/>
        </div>
      </div>

      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline :title="$t('project_accountable')" icon="user"/>

      <span class="govuk-label">
        Navn og stilling på projektleder/kontaktperson samt juridisk eller økonomisk ansvarlig hos hovedansøger.
      </span>
      <span class="govuk-hint">
        Hovedansøger er hovedansvarlig overfor VUDP, og alle udbetalinger sker udelukkende til hovedansøger.
      </span>

      <span class="govuk-label">{{ $t('project_manager') }}</span>
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-half">
          <v-input-text v-model="application.project_manager_name" :label="$t('name')" validate="required"/>
        </div>
        <div class="govuk-grid-column-one-half">
          <v-input-text v-model="application.project_manager_title" :label="$t('title')" validate="required"/>
        </div>
      </div>

      <span class="govuk-label">{{ $t('financially_responsible') }}</span>
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-half">
          <v-input-text v-model="application.responsible_finance_name" :label="$t('name')" validate="required"/>
        </div>
        <div class="govuk-grid-column-one-half">
          <v-input-text v-model="application.responsible_finance_title" :label="$t('title')" validate="required"/>
        </div>
      </div>

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
        partners: [
          {
            id: this.partnerId
          }
        ],
        subject: []
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
      ],
      subjects: [
        {
          label: 'Spildevand'
        },
        {
          label: 'Drikkevand'
        },
        {
          label: 'Klimatilpasning'
        }
      ],
      partnerId: 0
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
      const formData = new FormData()
      let vm = this
      Object.keys(this.application).map(function (key, index) {
        let value = vm.application[key]
        if (Array.isArray(value)) {
          value = value.map(item => { // loop through all array items
            if (item !== null && typeof item === 'object') {
              return JSON.stringify(item) // if the item is an object, stringify it
            }
            return item
          })
        }
        formData.append(key, value)
      })

      Api.sendApplication(formData)
        .then(response => {
          console.log(response)
          this.$router.push({ name: 'thankyou' })
        })
    },

    addPartner () {
      // we need an incremental ID so that v-validate doesn't reuse fields: https://baianat.github.io/vee-validate/guide/conditional-and-looping-inputs.html#handling-v-for
      this.partnerId++
      this.application.partners.push({
        id: this.partnerId
      })
    },

    removePartner(id) {
      this.application.partners = this.application.partners.filter(partner => partner.id !== id)
    }
  },
  created () {
    this.application.partners[0].id = this.partnerId // init first partnerId in created(), as we can't get this.partnerId when setting this.application.partners[0].id inside data().
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
