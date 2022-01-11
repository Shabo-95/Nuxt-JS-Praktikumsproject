<template>
  <div class="layout">
    <Navbar2 />
    <Nuxt class="main" />
    <Footer />
    <Overlay v-show="showModal" @close-modal="showModal = false" />
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
<style lang="scss">
.layout {
  // position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
