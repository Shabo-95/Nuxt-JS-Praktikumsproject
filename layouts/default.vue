<template>
  <div>
    <Navbar />
    <Nuxt />
    <Overlay v-show="showModal" @close-modal="showModal = false" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Overlay from '../components/Overlay.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Overlay,
    Footer,
  },
  data() {
    return {
      showModal: false,
    }
  },
  created() {
    this.$nuxt.$on('open-modal', () => {
      this.showModal = true
    })
  },
}
</script>
