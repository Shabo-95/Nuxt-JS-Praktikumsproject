<template>
  <div class="grid-container">
    <CardItems
      v-for="product in filteredProducts"
      :key="product.id"
      v-bind="product"
    />
  </div>
</template>

<script>
export default {
  props: {
    filteredProducts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-container {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(3, 1fr);
  //   background-color: #2196f3;
  padding: 10px;
}

@media screen and (max-width: 990px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: auto;
  }
}
</style>
