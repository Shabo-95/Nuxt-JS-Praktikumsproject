<template>
  <div>
    <SearchComponent v-on:updateSearchText="updateText($event)" />
    <div class="container products">
      <div class="row justify-content-around">
        <Products
          v-for="(product, id) in filteredProducts"
          :key="id"
          v-bind="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from '~/components/SearchComponent.vue'
import Products from '~/components/Products.vue'

export default {
  components: {
    SearchComponent,
    Products,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        console.log('searchText', this.searchText)
        return product.title
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      })
    },
  },
  methods: {
    updateText(updatedText) {
      this.searchText = updatedText
      console.log('this.filteredProducts', this.filteredProducts)
      console.log('updatedText', updatedText)
    },
  },
  // mounted() {
  //   console.log('this.filteredProducts', this.filteredProducts)
  //   console.log('products', this.products)
  // },
}
</script>

<style lang="scss" scoped></style>
