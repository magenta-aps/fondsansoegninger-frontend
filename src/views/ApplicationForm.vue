<template>
  <div class="govuk-!-padding-top-6">
    <form @submit.stop.prevent="submitForm">
      <v-headline title="Ansøger" icon="user"/>
      <v-input-text label="CVR" validate="required|digits:8" size="8"/>
      <v-input-text label="Forening/organisations navn" validate="required"/>
      <v-input-text label="Adresse" validate="required"/>
      <v-input-text label="Post nr." validate="required|digits:4" size="4"/>
      <v-input-text label="By" validate="required"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline title="Kontaktperson" icon="user"/>
      <v-input-text label="Fornavn" validate="required"/>
      <v-input-text label="Efternavn" validate="required"/>
      <v-input-text label="Email" validate="required|email"/>
      <v-input-text label="Telefon" validate="required|digits:8" size="10"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline title="Projektet" icon="home"/>
      <v-input-text label="Projekttitel" hint="Skriv en kortfattet projekttitel." validate="required|max:250"/>
      <v-input-textarea label="Kort projektbeskrivelse" hint="en kort beskrivelse af projektet der uddyber projekttitlen." validate="required|word_limit:500"/>
      <v-input-upload label="Vedhæft uddybende projektbeskrivelse" hint="Upload projektbeskrivelsen som pdf." validate="required|size:2048"/>
      <v-input-radio label="Kategori" hint="Vælg det område, der bedst dækker projektets formål." :options="radioOptions" validate="required"/>
      <v-input-date label="Forventet projektstart" validate="required"/>
      <v-input-date label="Forventet projektslut" validate="required"/>
      <v-input-text label="Ansøgt beløb" validate="required|numeric|decimals:2"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline title="Dokumenter" icon="paperclip"/>
      <div class="govuk-inset-text">
        Alle filer skal være pdfer
      </div>
      <v-input-upload label="Budget" validate="required|size:2048"/>
      <v-input-upload label="Bestyrelsessammensætning" validate="required|size:2048"/>
      <v-input-upload label="Vedtægter" validate="required|size:2048"/>
      <v-input-upload label="Regnskab" validate="required|size:2048"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline title="Bankoplysninger" icon="university"/>
      <v-input-text label="Reg nr." validate="required|max:4" size="4"/>
      <v-input-text label="Konto nr." validate="required|max:8" size="10"/>
      <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible govuk-!-padding-top-3">

      <v-headline title="Yderligere oplysninger og godkendelse" icon="file-alt"/>
      <v-input-checkbox label="Samtykke" description="jeg er en samtykkeerklæring" validate="required"/>
      <v-input-checkbox label="Privatlivspolitik" description="jeg er en privatlivspolitik" validate="required"/>

      <button type="submit" class="govuk-button govuk-button--start">
        Send ansøgning
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
