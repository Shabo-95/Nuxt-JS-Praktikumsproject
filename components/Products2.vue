<template>
  <div>
      <Card2
      :filteredProducts="filteredProducts"
      />
    </div>
    <!-- <div class="card h-100" style="width: 18rem">
        <NuxtLink class="nav-link" :to="`/Products/${id}`">
          <ImageComponent :source="image" :height="240" :width="180" />
        </NuxtLink>
        <div class="card-body text-center">
          <h5 class="card-title text-center">{{ title }}</h5>
        </div>
        <div class="card-footer text-center">
          <p class="card-text">Price: {{ price }}$</p>
          <button class="btn btn-primary" @click="$nuxt.$emit('open-modal')">
            Warenkorb legen
          </button>
        </div>
      </div> -->
  </div>
</template>

<script>
import ImageComponent from '~/components/ImageComponent.vue'

export default {
  name: 'Products',

  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
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
