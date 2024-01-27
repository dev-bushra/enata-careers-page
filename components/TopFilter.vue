<template>
  <div>
    <div class="filter_wrapper">
      <v-text-field
      class="custom-input"
        label="Keywords"
        placeholder="Keywords"
        outlined
        single-line
        dense
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-text-field
      class="custom-input"
        label="Location"
        placeholder="Location"
        outlined
        single-line
        dense
        prepend-inner-icon="mdi-map-marker-outline"
      ></v-text-field>
      <v-select
      class="custom-input"
        :items="items"
        label="Chose Category..."
        outlined
        single-line
        dense
      ></v-select>
      <v-btn
        small
        dense
        color="blue"
        elevation="0"
        class="ma-0 pa-0 px-15 py-5 mb-7"
        ><span class="text-white text-sm">Search Job</span></v-btn
      >
    </div>
    <div class="chip_wrapper">
      <v-chip
        close-icon="mdi-delete"
        color="#eaf6fc"
        class="custom-chip flex flex-row items-center pa-5 pt-6 max-w-fit text-blue"
      >
        <v-checkbox label="Freelance" class="text-blue"></v-checkbox>
      </v-chip>
      <v-chip
        close-icon="mdi-delete"
        color="#eaf6fc"
        class="custom-chip flex flex-row items-center pa-5 pt-6 max-w-fit text-blue"
      >
        <v-checkbox label="Full-time" class="text-blue"></v-checkbox>
      </v-chip>
      <v-chip
        close-icon="mdi-delete"
        color="#eaf6fc"
        class="custom-chip flex flex-row items-center pa-5 pt-6 max-w-fit text-blue"
      >
        <v-checkbox label="Part-time" class="text-blue"></v-checkbox>
      </v-chip>
      <v-chip
        close-icon="mdi-delete"
        color="#eaf6fc"
        class="custom-chip flex flex-row items-center pa-5 pt-6 max-w-fit text-blue"
      >
        <v-checkbox label="Internship" class="text-blue"></v-checkbox>
      </v-chip>
    </div>
    <v-divider class="mt-6 mb-4" />
    <div class="px-10 w-full d-flex items-center justify-space-between">
      <span class="text-secondary"
        >Search completed. Found 39 matching records.</span
      >
      <div class="d-flex items-center gap-x-3">
        <span class="blue--text cursor-pointer">RSS</span>
        <span class="blue--text ml-3 cursor-pointer">Reset</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>

<style lang="scss"></style>
