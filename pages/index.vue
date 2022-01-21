<template>
  <div class="home">
    <Angebote />
    <!-- <ImagePlaceholder :source="image" /> -->
    <HeaderText />
    <Accordion />
    <GridContent />
    <GridContent2 />
    <PhotoGrid />
    <ImagePlaceholder :source="image" />
  </div>
</template>

<script>
// @ is an alias to /src
import Angebote from '@/components/Angebote.vue'
import HeaderText from '@/components/HeaderText.vue'
import Accordion from '@/components/Accordion.vue'
import GridContent from '@/components/GridContent.vue'
import GridContent2 from '@/components/GridContent2.vue'
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'

export default {
  name: 'Home',
  components: {
    Angebote,
    HeaderText,
    Accordion,
    GridContent,
    GridContent2,
    ImagePlaceholder,
  },

  data() {
    return {
      image: '',
    }
  },

  methods: {
    resizeEventHandler() {
      console.log('resizing!!!!!')
      this.changeImage()
    },
    changeImage() {
      if (window.innerWidth > 600) {
        console.log('Image Big')
        this.image = 'https://via.placeholder.com/600'
      } else {
        console.log('Image Small')
        this.image = 'https://via.placeholder.com/300'
      }
    },
  },

  mounted() {
    this.changeImage()
    window.addEventListener('resize', this.resizeEventHandler)
  },
}
</script>
