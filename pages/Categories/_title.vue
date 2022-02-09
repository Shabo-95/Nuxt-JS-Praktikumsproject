<template>
  <ProductSearch2 :products="products" />
</template>

<script>
import ProductSearch from '~/components/withBootstrap/ProductSearch.vue'

export default {
  components: {
    ProductSearch,
  },
  async asyncData({ $axios, route }) {
    // const api_url = 'https://fakestoreapi.com/products?limit=3'
    // console.log('params', params)
    const api_url =
      'https://fakestoreapi.com/products/category/' + route.params.title
    const products = await $axios.$get(api_url)
    // console.log('route.params.title', route.params.title)
    // console.log('api_url', api_url)
    return { products }
  },
}
</script>

<style></style>
