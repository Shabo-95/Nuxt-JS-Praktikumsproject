<template>
  <div>
    Product {{ $route.params.id }}
    <!-- <ImageComponent /> -->
    <!-- <h1>Product {{ $routes.params.id }}</h1> -->
    <!-- <p></p> -->
  </div>
</template>

<script>
export default {
  props: ['products'],
  // computed: {
  //   product() {
  //     return {
  //       this.products.find(p => p.id == this.$route.params.id)
  //     }
  //   }
  // }
}
</script>

<style></style>
