<template>
  <div>
    <Categories :categories="categories" />
  </div>
</template>

<script>
import Categories from '~/components/Categories.vue'
export default {
  components: { Categories },
  data() {
    return {
      categories: [
        {
          title: 'jewelery',
          image: require('@/assets/images/category-images/jewelery.png'),
        },
        {
          title: 'electronics',
          image: require('@/assets/images/category-images/electronics.png'),
        },
        {
          title: "men's clothing",
          image: require("@/assets/images/category-images/men's clothing.png"),
        },
        {
          title: "women's clothing",
          image: require("@/assets/images/category-images/women's clothing.png"),
        },
      ],
    }
  },
  // async asyncData({ $axios, route }) {
  //   const api_url = 'https://fakestoreapi.com/products/category/'
  //   const categories = await $axios.$get(api_url)
  //   console.log('categories', categories)
  //   return { categories }
  // },
  // mounted() {
  //   console.log('categories', categories)
  // },
}
</script>

<style></style>
