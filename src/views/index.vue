<template>
  <div class="home">
    <Header />

    <Home />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/views/home/index.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
