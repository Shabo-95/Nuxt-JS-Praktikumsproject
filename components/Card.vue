<template>
  <div class="card-custom">
    <img
      class="grid-image"
      src="@/assets/images/grid-images/placeholder.png"
      alt="image2"
    />
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
export default {}
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

.grid-image {
  object-fit: cover;
  width: 100%;
}
</style>
