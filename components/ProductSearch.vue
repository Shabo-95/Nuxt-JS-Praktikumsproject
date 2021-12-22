<template>
  <div class="productSearch-div">
    <SearchComponent v-on:updateSearchText="updateText($event)" />
    <div class="container mb-5">
      <div class="row justify-content-around">
        <Products
          v-for="product in filteredProducts"
          :key="product.id"
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
