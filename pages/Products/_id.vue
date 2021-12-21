<template>
  <div class="container mt-5">
    <div class="row custom-border border-primary">
      <div
        class="col-md-5 p-3 d-flex justify-content-center align-items-center"
      >
        <img
          :src="productDetails.image"
          class="image__custom"
          alt="No Picture"
          height="300"
          width="300"
        />
      </div>
      <div class="col-md-7 p-5 p-md-2 border-primary border-left">
        <h1 class="p-4">{{ productDetails.title }}</h1>
        <h4 class="p-4">{{ productDetails.description }}</h4>
        <h4 class="p-4">Price: {{ productDetails.price }} $</h4>
        <button class="btn btn-primary rounded p-4">Warenkorb legen</button>
      </div>
    </div>
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

<style lang="scss" scoped>
.custom-border {
  border-style: solid;
  border-color: #dee2e6;
  border-width: 2px;
  border-radius: 50px;
}
.image {
  &__custom:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  &__custom {
    transition: all 0.5s ease-in-out;
  }
}
</style>
