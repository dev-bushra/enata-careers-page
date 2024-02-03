<template>
  <div fluid class="main_wrapper">
    <Navbar />
    <v-container fluid class="thank_wrapper">
        <v-row class="services_cards_row">
            <img class="logo align-self-start" src="/enata-logo.svg" alt="logo" >
            <v-col cols="12" class="thank_you_col">
                <div class="thank_you_card"  >
                    <h3 class="thank_you_title">Thank you!</h3>
                    <span class="thank_you_subtext mt-2 mb-8">Please select from one of the following options below</span>
                    <div class="thank_you_request_data_card">
                        <h4 class="font-weight-bold">Submitted on 23rd March, 2023 10:37 AM</h4>
                        <span class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, amet sequi.</span>
                    </div>
                </div>
            </v-col>
            <img class="thank_you_victor_art" src="/images/thank_you_victor_art.svg" alt="thank_you_victor_art">
            <div class="powered_by_logo d-flex ma-auto">
                <div class="thank_you_footer_text" >
                    <h4 class="font-weight-bold">Visit our website</h4>
                    <span class="font-weight-light">For more information about any of our other services</span>
                    <span class="mt-3 px-5 py-2 white blue--text font-weight-light rounded-lg">https://www.enata.com/</span> 
                </div>
            </div>
        </v-row>
    </v-container>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
import Card from '../components/Card.vue'

export default {
  components: { Navbar, Footer, Banner, Card },
  data() {
    return {}
  },
  methods: {
    // redirectMe() {
    //         setTimeout(() => this.$router.push('/'), 10000)
    //     }
  },
  // mounted() {
  //       this.redirectMe()
  //       this.$nuxt.$on('routeChanged', () => {
  //           this.$nextTick(() => {
  //               this.$nuxt.$root.$emit('triggerScroll')
  //           })
  //           })
  //           this.$nextTick(() => {
  //           this.$nuxt.$root.$emit('triggerScroll')
  //       })
  //   }
}
</script>

<style lang="scss"></style>
