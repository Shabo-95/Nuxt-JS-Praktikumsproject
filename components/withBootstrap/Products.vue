<template>
  <div
    class="col-lg-4 col-md-6 d-flex justify-content-center align-items-center mt-5"
  >
    <div class="card h-100" style="width: 18rem">
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
    </div>
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
  },

  components: {
    ImageComponent,
  },
  // mounted() {
  //   console.log(image)
  // },
}
</script>

<style lang="scss" scoped></style>
