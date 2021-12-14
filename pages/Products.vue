<template>
  <Products :products="products" />
</template>

<script>
import Products from '~/components/Products.vue'

export default {
  components: {
    Products,
  },
  async asyncData({ $axios }) {
    // const api_url = 'https://fakestoreapi.com/products?limit=3'
    const api_url = 'https://fakestoreapi.com/products'
    // const api_url = 'https://freefakeapi.io/api/users'
    const products = await $axios.$get(api_url)
    return { products }
  },
}
</script>

<style></style>
