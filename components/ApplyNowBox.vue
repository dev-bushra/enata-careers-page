<template>
  <div class="apply_now_box flex-column">
    <div class="d-flex align-center flex-column text-center">
      <v-img
        src="https://authenticjobs.com/wp-content/uploads/job-manager-uploads/company_logo/2023/10/Tanuki_white_square.png"
        max-width="65px"
        max-hight="65px"
      />
      <div class="d-flex flex-column">
        <h5 class="font-black text-lg mt-5 mb-1">Product Designer</h5>
        <span class="font-light text-sm text-secondary">San Francisco, California</span>
      </div>
    </div>

    <v-btn
      large
      small
      x-large
      color="blue"
      elevation="0"
      class="ma-0 pa-0 px-15 text-white text-sm"
      @click="handleOpenApplicationForm"
    >
      Apply Now
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    handleOpenApplicationForm() {
      console.log('handleOpenApplicationForm clicked');
      this.$emit('OpenApplicationForm', true)
    }
  }
}
</script>

<style lang="scss"></style>
