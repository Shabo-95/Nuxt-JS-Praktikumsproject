<template>
  <div class="productSearch-div">
    <!-- <SearchComponent v-on:updateSearchText="updateText($event)" /> -->
    <SearchComponent2 v-on:updateSearchText="updateText($event)" />
    <Products2 :filteredProducts="filteredProducts" />
  </div>
</template>

<script>
import SearchComponent from '~/components/withBootstrap/SearchComponent.vue'
import Products from '~/components/withBootstrap/Products.vue'

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
  box-shadow: 0 0 10px #0275d8;
}
.productSearch-div {
  position: relative;
}
</style>
