<template>
  <div>
    <SearchComponent v-on:updateSearchText="updateText($event)" />
    <div class="container products">
      <div class="row justify-content-around">
        <Products
          ref="Products"
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
      // console.log('this.filteredProducts', this.filteredProducts)
      // console.log('updatedText', updatedText)
      // console.log('this.$el', this.$el)
      // const arr = Array.from(this.$children)
      // console.log('this.$children', this.$children)
      // console.log('this.$refs.myChild', this.$refs.Products.myChild.$el)
      // console.log(
      //   'this.$refs.Products[0].$refs.myChild.$el',
      //   this.$refs.Products[0].$refs.myChild.$el
      // )
      // console.log('this.$refs.Products', this.$refs.Products)
      console.log('input !!!!!!!!!!!!!!!!!!!!')

      Object.entries(this.$refs.Products).forEach((product) => {
        // console.log(product[1])
        const imageElement2 = Array.from(
          product[1].$refs.myChild.$el.children
        ).find((el) => el.nodeName === 'IMG')
        console.log('imageElement2.src', imageElement2.src)
        console.log('imageElement2.dataset.url', imageElement2.dataset.url)
        imageElement2.src = imageElement2.dataset.url
      })

      // const imageElement2 = Array.from(this.$el).find(
      //   (el) => el.nodeName === 'IMG'
      // )
      // console.log('imageElement2', imageElement2)
      // imageElement.src = imageElement.dataset.url

      // imageElement = this.$refs
      // imageElement.src = imageElement.dataset.url

      // this.$root.$on('ImageComponent', () =>
      //   // your code goes here
      //   this.loadImage()
      // )
    },
  },
  // mounted() {
  //   console.log('this.filteredProducts', this.filteredProducts)
  //   console.log('products', this.products)
  // },
}
</script>

<style lang="scss" scoped></style>
