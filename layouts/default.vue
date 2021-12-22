<template>
  <div>
    <Navbar />
    <Nuxt />
    <Overlay2 v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar,
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
