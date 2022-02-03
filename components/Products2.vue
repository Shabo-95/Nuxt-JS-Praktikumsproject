<template>
  <Card2 :filteredProducts="filteredProducts" />
</template>

<script>
import ImageComponent from '~/components/ImageComponent.vue'

export default {
  name: 'Products',

  props: {
    filteredProducts: {
      type: Array,
      required: true,
    },
  },

  components: {
    ImageComponent,
  },
  // mounted() {
  //   console.log(image)
  // },
}
</script>

<style lang="scss" scoped>
// .grid-container {
//   display: grid;
//   grid-gap: 20px 20px;
//   grid-template-columns: 1fr 1fr 1fr;
//   background-color: #2196f3;
//   padding: 10px;
// }

// .grid-item {
//   background-color: rgba(255, 255, 255, 0.8);
//   border: 1px solid rgba(0, 0, 0, 0.8);
//   padding: 20px;
//   font-size: 30px;
//   text-align: center;
// }

// @media screen and (max-width: 540px) {
//   .grid-container {
//     grid-template-columns: auto auto;
//   }
// }

// @media screen and (max-width: 350px) {
//   .grid-container {
//     grid-template-columns: auto;
//   }
// }
</style>
