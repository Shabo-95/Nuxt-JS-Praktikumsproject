<template>
  <div>
    <ProductSearch :products="products" />
    <ProductSearch2 :products="products" />
  </div>
</template>

<script>
import ProductSearch from '~/components/ProductSearch.vue'
export default {
  components: {
    ProductSearch,
  },

  async asyncData({ $axios }) {
    // const api_url = 'https://fakestoreapi.com/products?limit=3'
    // console.log('params', params)
    const api_url = 'https://fakestoreapi.com/products'
    const products = await $axios.$get(api_url)

    return { products }
  },
}
</script>

<style></style>
