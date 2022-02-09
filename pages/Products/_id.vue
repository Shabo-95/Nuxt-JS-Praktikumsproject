<template>
  <ProductDetails v-bind="productDetails" />
</template>

<script>
import ProductDetails from '~/components/ProductDetails.vue'

export default {
  components: { ProductDetails },

  async asyncData({ $axios, route }) {
    const api_url = 'https://fakestoreapi.com/products/' + route.params.id
    const productDetails = await $axios.$get(api_url)
    console.log('route.params.id', route.params.id)
    return { productDetails }
  },
}
</script>

<style lang="scss" scoped></style>
