<template>
  <div class="col-md-6 d-flex justify-content-center align-items-center mt-5">
    <div class="card h-100" style="width: 18rem">
      <div class="card-body text-center">
        <NuxtLink class="nav-link" :to="`Categories/${title}`">
          <ImageComponent :source="image" :height="200" :width="200" />
        </NuxtLink>
      </div>
      <div class="card-footer text-center">
        <p class="card-text">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  // mounted() {
  //   console.log('this.category', this.category)
  // },
}
</script>

<style></style>
