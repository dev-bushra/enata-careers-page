<template>
  <div>
    <div class="filter_wrapper">
      <v-text-field
        label="Outlined"
        placeholder="Keywords"
        outlined
        single-line
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-text-field
        label="Outlined"
        placeholder="Location"
        outlined
        single-line
        prepend-inner-icon="mdi-map-marker-outline"
      ></v-text-field>
      <v-select
        :items="items"
        label="Chose Category..."
        outlined
        single-line
      ></v-select>
      <v-btn
        large
        small
        x-large
        color="blue"
        elevation="0"
        class="ma-0 pa-0 px-15 py-2 mb-7"
        ><span class="text-white">Search Job</span></v-btn
      >
    </div>
    <div class="chip_wrapper">
      <v-chip
        close-icon="mdi-delete"
        color="#00b0e5"
        class="flex flex-row items-center pa-5 pt-6 max-w-fit"
      >
        <v-checkbox label="Freelance"></v-checkbox>
      </v-chip>
      <v-chip
        close-icon="mdi-delete"
        color="#00b0e5"
        class="flex flex-row items-center pa-5 pt-6 max-w-fit"
      >
        <v-checkbox label="Full-time"></v-checkbox>
      </v-chip>
      <v-chip
        close-icon="mdi-delete"
        color="#00b0e5"
        class="flex flex-row items-center pa-5 pt-6 max-w-fit"
      >
        <v-checkbox label="Intership"></v-checkbox>
      </v-chip>
      <v-chip
        close-icon="mdi-delete"
        color="#00b0e5"
        class="flex flex-row items-center pa-5 pt-6 max-w-fit"
      >
        <v-checkbox label="Part-time"></v-checkbox>
      </v-chip>
    </div>
    <v-divider class="mt-6 mb-2" />
    <div class="px-10 w-full d-flex items-center justify-space-between">
      <span class="gray--text"
        >Search completed. Found 39 matching records.</span
      >
      <div class="d-flex items-center gap-x-3">
        <span class="blue--text">RSS</span>
        <span class="blue--text ml-3">Reset</span>
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
