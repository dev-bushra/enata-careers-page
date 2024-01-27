<template>
  <div class="card_wrapper">
    <JobList @ShowJobDetails="handleShowJobDetails" v-if="showJobDetails" />
    <JobDetails v-else />
  </div>
</template>

<script>
import JobDetails from '@/components/JobDetails.vue'
import JobList from '@/components/JobList.vue'

export default {
  components: { JobDetails, JobList },
  props: {},
  data() {
    return {
      showJobDetails: true,
    }
  },
  methods: {
    handleShowJobDetails() {
      this.showJobDetails = false
      console.log(this.showJobDetails);
    }
  }
}
</script>

<style lang="scss"></style>
