<template>
  <div>
    <Navbar />
    <Nuxt />
    <Overlay v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Overlay from '../components/Overlay.vue'

export default {
  components: {
    Navbar,
    Overlay,
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
