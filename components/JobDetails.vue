<template>
  <!-- Job Details -->
    <div class="job_details_wrapper">
      <!-- Share Top part -->
      <ShareJobBar />

      <!-- Job Details Data -->
      <div class="job_details_data_wrapper w-full d-flex flex-column">
        <div class="job_details_data_title">
          <h2 class="display-1 font-bold">
            Hiring a Principal Product Designer, Marketing Manager
          </h2>
          <v-divider
            class="my-5"
            style="
              max-width: 10%;
              min-height: 4px;
              background-color: rgb(26, 162, 210);
            "
          />
        </div>
        <div class="d-flex align-start flex-row w-full" style="gap: 4rem;">
          <div class="JD_wrapper">
            <h6 class="mb-2">What you’d be doing in this role :</h6>
            <span class="font-light text-secondary">
              Ensure that the CNC machines and machine room are clean, in proper
              state of operating at all times; Operate all CNC machines;
              Fabricate parts from Aluminum, steel and other exotic alloys;
              Consign the actual fabrication times and stock weights in the
              appropriate log; Verify parts tolerances and mechanical assembly
              clearances; Verify general part surface quality; Log machine hours
              and machine problems on the machine log; Establish and follow up
              on interval maintenance programs; Verify cutters stock, cutters
              condition.
            </span>
            <h4 class="mt-10 mb-2">Mechanical Production duties :</h4>
            <ul class="font-light text-secondary">
              <li class="font-light text-secondary mt-2">
                Ensure that the CNC machines and machine room are clean, in
                proper state of operating at all times
              </li>
              <li class="font-light text-secondary mt-1">Operate all CNC machines;</li>
              <li class="font-light text-secondary mt-1">
                Fabricate parts from Aluminum, steel and other exotic alloys;
              </li>
              <li class="font-light text-secondary mt-1">
                Consign the actual fabrication times and stock weights in the
                appropriate log;
              </li>
              <li class="font-light text-secondary mt-1">
                Verify parts tolerances and mechanical assembly clearances;
              </li>
              <li class="font-light text-secondary mt-1">Verify cutters stock, cutters condition.</li>
            </ul>
            <h4 class="mt-10 mb-2">Mechanical Production duties:</h4>
            <ul class="ml-2">
              <li class="font-light text-secondary mt-1">
                Read and analyze the CAD generated by the design engineer;
              </li>
              <li class="font-light text-secondary mt-1">Assist the programmer in generating tool path;</li>
              <li class="font-light text-secondary mt-1">
                Assist in noting machining times and stock weights in the
                appropriate system to generate cost sheets;
              </li>
              <li class="font-light text-secondary mt-1">
                Verify versus actual times and stock weight and generate a
                warning in case of discrepancies.
              </li>
            </ul>
          </div>

          <ApplyNowBox v-if="!applicationForm" @OpenApplicationForm="applicationForm=true" />
          <ApplicationForm v-if="applicationForm" @CloseApplicationForm="applicationForm=false" />
        </div>
      </div>
    </div>
</template>

<script>
import TopFilter from '@/components/TopFilter.vue'
import JobsCard from '@/components/JobsCard.vue'
import ApplyNowBox from '@/components/ApplyNowBox.vue'
import ApplicationForm from '@/components/ApplicationForm.vue'
import ShareJobBar from '@/components/ShareJobBar.vue'
import JobDetails from '@/components/JobDetails.vue'
import JobList from '@/components/JobList.vue'

export default {
  components: { TopFilter, JobsCard, ApplyNowBox, ApplicationForm, ShareJobBar, JobDetails, JobList },
  props: {},
  data() {
    return {
      applicationForm: false,
    }
  },
  methods: {
    handleSubmitForm() {
      console.log('form submitted');
      this.$router.push('./thank-you')
    },
  }
}
</script>

<style lang="scss"></style>
