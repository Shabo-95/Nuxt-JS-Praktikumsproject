<template>
  <div>
    <h1>{{ productDetails.title }}</h1>
    <h2>{{ productDetails.description }}</h2>
    <img :src="productDetails.image" alt="" height="300" width="300" />
  </div>
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

<style></style>
