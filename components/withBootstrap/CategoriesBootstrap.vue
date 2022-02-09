<template>
  <div class="container mb-5">
    <div class="row">
      <CategoriesListBootstrap
        v-for="category in categories"
        :key="category.title"
        v-bind="category"
      />
    </div>
  </div>
</template>

<script>
import CategoriesListBootstrap from '~/components/withBootstrap/CategoriesListBootstrap.vue'

export default {
  components: {
    CategoriesListBootstrap,
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
