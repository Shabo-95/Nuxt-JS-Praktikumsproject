<template>
  <div class="custom-container">
    <CategoriesItems
      v-for="category in categories"
      :key="category.title"
      v-bind="category"
    />
  </div>
</template>

<script>
import CategoriesItems from '~/components/CategoriesItems.vue'
export default {
  components: {
    CategoriesItems,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 50px;

  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  // padding: 5%;
}
.custom-container > div {
  flex: 0 0 50%;
}

@media (max-width: 1200px) {
  .custom-container {
    max-width: 960px;
  }
}
@media (max-width: 992px) {
  .custom-container {
    max-width: 720px;
    padding: 2%;
  }
}
@media (max-width: 768px) {
  .custom-container > div {
    flex: 0 0 100%;
  }
}
// @media (max-width: 576px) {
//   .custom-container {
//     max-width: 540px;
//   }
// }

.custom-card {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
