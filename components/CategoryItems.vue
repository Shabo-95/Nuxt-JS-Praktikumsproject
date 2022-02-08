<template>
  <div class="card h-100" style="width: 18rem">
    <div>
      <!-- <NuxtLink class="nav-link" :to="`/Categories/${title}`">
        <ImageComponent :source="image" :height="200" :width="200" />
      </NuxtLink> -->
      one
    </div>
    <div class="card-footer text-center">
      <p class="card-text">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  // mounted() {
  //   console.log('this.category', this.category)
  // },
}
</script>

<style lang="scss" scoped></style>
