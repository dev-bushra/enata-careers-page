<template>
  <div class="">
    <TopFilter />
    <JobsCard @TriggerShowJobDetails="handleShowJobDetails" />
  </div>
</template>

<script>
import TopFilter from '@/components/TopFilter.vue'
import JobsCard from '@/components/JobsCard.vue'
import ApplyNowBox from '@/components/ApplyNowBox.vue'
import ApplicationForm from '@/components/ApplicationForm.vue'
import ShareJobBar from '@/components/ShareJobBar.vue'

export default {
  components: { TopFilter, JobsCard, ApplyNowBox, ApplicationForm, ShareJobBar },
  props: {},
  data() {
    return {
      applicationForm: false,
    }
  },
  methods: {
    handleShowJobDetails() {
      this.$emit('ShowJobDetails', true)
    }
  }
}
</script>

<style lang="scss"></style>
