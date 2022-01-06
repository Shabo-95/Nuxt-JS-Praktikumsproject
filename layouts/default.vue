<template>
  <div>
    <Navbar2 />
    <Nuxt />
    <Overlay v-show="showModal" @close-modal="showModal = false" />
    <Footer />
  </div>
</template>

<script>
import Navbar2 from '../components/Navbar2.vue'
import Overlay from '../components/Overlay.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar2,
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
