<template>
  <div class=".col-6 .col-sm-4 mt-5">
    <div class="card h-100" style="width: 18rem">
      <ImageComponent :source="image" :height="240" :width="180" />

      <div class="card-body text-center">
        <h5 class="card-title text-center">{{ title }}</h5>
      </div>
      <div class="card-footer text-center">
        <p class="card-text">Price: {{ price }}$</p>
        <button class="btn btn-primary">Warenkorb legen</button>
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

<style lang="scss" scoped>

</style>
