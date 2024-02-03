<template>
  <div fluid class="main_wrapper">
    <Navbar />
    <Banner />
    <Card />
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
  methods: {},
  mounted() {},
}
</script>

<style lang="scss"></style>
