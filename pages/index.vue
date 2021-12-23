<template>
  <div class="home">
    <HeaderImage />
    <HeaderText />
    <Accordion />
    <GridContent />
    <ImagePlaceholder :source="image" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'
import HeaderText from '@/components/HeaderText.vue'
import Accordion from '@/components/Accordion.vue'
import GridContent from '@/components/GridContent.vue'
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'

export default {
  name: 'Home',
  components: {
    HeaderImage,
    HeaderText,
    Accordion,
    GridContent,
    ImagePlaceholder,
  },

  data() {
    return {
      image: '',
    }
  },

  mounted() {
    if (window.innerWidth > 600) {
      console.log('Image Big')
      this.image = 'https://via.placeholder.com/600'
    } else {
      console.log('Image Small')
      this.image = 'https://via.placeholder.com/300'
    }
  },
}
</script>
