<template>
  <div class="home">
    <HeaderImage />
    <HeaderText />
    <Accordion />
    <GridContent />
    <!-- <Overlay />
    <OverlayButton /> -->
    <Products :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import HeaderText from "@/components/HeaderText.vue";
import Accordion from "@/components/Accordion.vue";
import GridContent from "@/components/GridContent.vue";
import Overlay from "@/components/Overlay.vue";
import OverlayButton from "@/components/OverlayButton.vue";
import Products from '~/components/Products.vue';

export default {
  name: "Home",
  components: {
    HeaderImage,
    HeaderText,
    Accordion,
    GridContent,
    Overlay,
    OverlayButton,
    Products,
  },
  async asyncData({$axios}) {
    const api_url = "https://fakestoreapi.com/products?limit=12"
    const products = await $axios.$get(api_url)
    return { products }
  },
};
</script>
