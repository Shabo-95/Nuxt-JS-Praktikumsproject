<template>
  <div class="grid-container">
    <CategoriesCardItems
      v-for="category in categories"
      :key="category.title"
      v-bind="category"
    />
  </div>
</template>

<script>
export default {
  props: {
    categories: {
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
