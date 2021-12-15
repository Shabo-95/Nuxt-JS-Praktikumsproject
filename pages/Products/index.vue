<template>
  <div>
    <SearchComponent :search="searchText" />
    <Products
      v-for="(product, id) in filteredProducts"
      :key="id"
      v-bind="product"
    />
  </div>
</template>

<script>
import Products from '~/components/Products.vue'

export default {
  components: {
    Products,
  },
  props: {
    searchText: {
      type: String,
      default: '',
      required: true,
    },
  },
  async asyncData({ $axios }) {
    // const api_url = 'https://fakestoreapi.com/products?limit=3'
    const api_url = 'https://fakestoreapi.com/products'
    // const api_url = 'https://freefakeapi.io/api/users'
    const products = await $axios.$get(api_url)
    return { products }
  },
  computed: {
    filteredProducts() {
      console.log('this.products', this.products)
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },
}
</script>

<style></style>
