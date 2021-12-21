<template>
  <ProductDetails :productDetails="productDetails" />
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const api_url = 'https://fakestoreapi.com/products/' + route.params.id
    const productDetails = await $axios.$get(api_url)
    return { productDetails }
  },
}
</script>

<style lang="scss" scoped></style>
