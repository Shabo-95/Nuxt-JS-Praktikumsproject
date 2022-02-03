<template>
  <div class="productSearch-div">
    <SearchComponent v-on:updateSearchText="updateText($event)" />
    <ProductsWithoutBootstrap :filteredProducts="filteredProducts" />
  </div>
</template>

<script>
import SearchComponent from '~/components/SearchComponent.vue'
import ProductsWithoutBootstrap from '~/components/ProductsWithoutBootstrap.vue'

export default {
  components: {
    SearchComponent,
    ProductsWithoutBootstrap,
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
      showModal: true,
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      })
    },
  },
  methods: {
    updateText(updatedText) {
      this.searchText = updatedText
    },
  },
  // mounted() {
  // console.log('this.filteredProducts', this.filteredProducts)
  // console.log('products', this.products)
  // },
}
</script>

<style lang="scss" scoped>
.border-rad {
  border-radius: 50px;
}
.productSearch-div {
  position: relative;
}
</style>
