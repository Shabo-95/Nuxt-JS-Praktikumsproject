<template>
  <div class="card-custom">
    <div class="image-container">
      <ImageComponent :source="image" class="image" />
    </div>
    <div class="card-body-custom">
      <h4 class="card-title-custom">Lorem ipsum dolor sit amet consectetur.</h4>
      <p class="card-text-custom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempore
        laboriosam omnis odit ea, molestias optio veniam, nemo nobis voluptatem
        deleniti ipsam voluptates saepe labore! Aliquam quam sit cupiditate
        ipsa.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { image: require('@/assets/images/grid-images/placeholder.png') }
  },
}
</script>

<style lang="scss" scoped>
.card-body-custom {
  padding: 1.25rem;
  text-align: left;
}

.card-title-custom {
  font-size: 24px;
  padding-bottom: 0.5rem;
}

.card-text-custom {
  font-size: 16px;
}

::v-deep {
  .image {
    padding: 0;
    // object-fit: cover;
    // width: 100%;
  }
}
// img {
//   padding: 0;
//   // object-fit: cover;
//   // width: 100%;
// }
</style>
