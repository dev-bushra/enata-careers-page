<template>
  <div class="apply_now_form d-flex flex-column">
    <div class="d-flex align-start justify-space-between">
      <div class="">
        <h3>Submit your Application</h3>
        <span>Let fill the information below</span>
      </div>
      <v-icon small @click="handleCloseApplicationForm">mdi-close</v-icon>
    </div>
    <div class="form_wrapper">
      <div class="d-flex">
        <v-text-field label="First Name" outlined dense></v-text-field>
        <v-text-field
          class="ml-3"
          label="Last Name"
          outlined
          dense
        ></v-text-field>
      </div>
      <div class="d-flex">
        <v-text-field label="Email" outlined dense></v-text-field>
        <v-text-field class="ml-3" label="Phone" outlined dense></v-text-field>
      </div>
      <div class="d-flex">
        <v-text-field label="Nationality" outlined dense></v-text-field>
        <v-text-field
          class="ml-3"
          label="Exacted Salary"
          outlined
          dense
        ></v-text-field>
      </div>
      <div class="d-flex flex-column">
        <v-file-input
          outlined
          prepend-inner-icon="mdi-paperclip"
          prepend-icon=""
          placeholder="Upload your resume"
          dense
        ></v-file-input>
        <v-file-input
          outlined
          prepend-inner-icon="mdi-paperclip"
          prepend-icon=""
          placeholder="Upload your photo"
          class="ml-1"
          dense
        ></v-file-input>
      </div>
      <v-textarea
        outlined
        name="input-7-4"
        label="Tell us more about yourself"
      ></v-textarea>

      <v-btn
        large
        small
        x-large
        color="blue"
        elevation="0"
        @click="handleSubmitForm()"
        class="ma-0 pa-0 px-15 py-2 mb-2 mt-0"
        ><span class="text-white">Apply Now</span></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    handleSubmitForm() {
      console.log('form submitted');
      this.$router.push('./thank-you')
    },
    handleCloseApplicationForm() {
      this.$emit('CloseApplicationForm', false)
    }
  }
}
</script>

<style lang="scss"></style>
