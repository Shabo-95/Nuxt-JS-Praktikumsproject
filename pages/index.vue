<template>
  <div class="home">
    <!-- <Angebote /> -->
    <Angebote2 />
    <!-- <ImagePlaceholder :source="image" /> -->
    <HeaderText :title="title" :body="body" />
    <Accordion />
    <GridContent />
    <GridContent2 />
    <PhotoGrid />
    <ImagePlaceholder v-bind="sources" />
  </div>
</template>

<script>
// @ is an alias to /src
import Angebote from '@/components/Angebote.vue'
import Angebote2 from '@/components/Angebote2.vue'
import HeaderText from '@/components/HeaderText.vue'
import Accordion from '@/components/Accordion.vue'
import GridContent from '@/components/GridContent.vue'
import GridContent2 from '@/components/GridContent2.vue'
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'

export default {
  name: 'Home',
  components: {
    Angebote,
    Angebote2,
    HeaderText,
    Accordion,
    GridContent,
    GridContent2,
    ImagePlaceholder,
  },

  data() {
    return {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque nobis totam eum aspernatur, magnam sunt dolorem harum unde facere enim nisi modi error ducimus deleniti dolorum perferendis cum quas! Ea quod distinctio modi neque incidunt laboriosam, similique perferendis voluptas error enim, vitae dolorem maxime aut dignissimos laborum quos architecto velit et nam esse officia voluptatibus. Hic consectetur ullam fuga! Rerum, totam! Cum, inventore quidem asperiores vel voluptate obcaecati ipsam consectetur, molestiae, debitis odit maiores ad! Ex culpa consequatur eum? Ducimus ratione beatae esse.',
      sources: {
        imageBig: 'https://via.placeholder.com/600',
        imageSmall: 'https://via.placeholder.com/300',
      },
    }
  },
}
</script>
