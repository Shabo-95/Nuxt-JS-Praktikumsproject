<template>
  <div class="custom-container">
    <CategoryItems
      v-for="category in categories"
      :key="category.title"
      v-bind="category"
    />
  </div>
</template>

<script>
import CategoriesList from '~/components/CategoriesList.vue'

export default {
  components: {
    CategoriesList,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  // mounted() {
  //   console.log('this.categories:', this.categories)
  // },
}
</script>

<style lang="scss" scoped>
.custom-container {
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  // border: 10px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5%;
}
.custom-container > div {
  flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
  /*demo*/
}

// @media (max-width: 1200px) {
//   .custom-container {
//     max-width: 960px;
//   }
// }

@media (max-width: 992px) {
  .custom-container {
    max-width: 720px;
    padding: 2%;
  }
}

@media (max-width: 768px) {
  .custom-container {
    flex: 100%;
  }
}

// @media (max-width: 576px) {
//   .custom-container {
//     max-width: 540px;
//   }
// }
</style>
