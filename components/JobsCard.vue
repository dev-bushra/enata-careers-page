<template>
  <div class="jobs_card_wrapper d-flex flex-col w-full mt-10">
  
      <div class="job_card cursor-pointer" @click="handleShowJobDetails()">
        <div class="d-flex align-center">
          <v-img src="https://authenticjobs.com/wp-content/uploads/job-manager-uploads/company_logo/2023/10/Tanuki_white_square.png" max-width="65px" max-hight="65px" />
          <div class="d-flex flex-column ml-9">
            <h5>GitLab Engineer – DevOps</h5>
            <span class="">San Francisco, California</span>
          </div>
        </div>
        <div class="d-flex flex-column align-end">
          <span class="text-success">Part-time</span>
          <span>Posted Today</span>
        </div>
      </div>

      <div class="job_card mt-3 cursor-pointer" @click="handleShowJobDetails()">
        <div class="d-flex align-center">
          <v-img src="https://authenticjobs.com/wp-content/uploads/job-manager-uploads/company_logo/2023/08/download-150x150.png" max-width="65px" max-hight="65px" class="" style="border-radius:50%" />
          <div class="d-flex flex-column ml-9">
            <h5>Product Designer</h5>
            <span class="">UAE, Dubai</span>
          </div>
        </div>
        <div class="d-flex flex-column align-end">
          <span class="text-success">Full-time</span>
          <span>Posted 4 months ago</span>
        </div>
      </div>
  
    </div>

</template>

<script>

export default {
  props: {},
  methods: {
    handleShowJobDetails() {
      this.$emit('TriggerShowJobDetails', true)
    }
  }
}
</script>

<style lang="scss"></style>
