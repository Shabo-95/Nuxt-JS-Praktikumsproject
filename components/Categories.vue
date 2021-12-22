<template>
  <div class="container mb-5">
    <div class="row">
      <CategoriesList
        v-for="category in categories"
        :key="category.title"
        v-bind="category"
      />
    </div>
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

<style lang="scss" scoped></style>
