<template>
  <div class="grid-container">
    <div
      class="grid-item"
      v-for="product in filteredProducts"
      :key="product.id"
      v-bind="product"
    >
      <div class="card-custom">
        <img
          class="grid-image"
          :src="product.image"
          alt="image2"
          width="240"
          height="240"
        />
        <div class="card-body-custom">
          <h4 class="card-title-custom">{{ product.title }}</h4>
        </div>
        <div class="card-footer-custom">
          <p class="card-text-custom">Price: {{ product.price }}$</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filteredProducts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-container {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(3, 1fr);
  //   background-color: #2196f3;
  padding: 10px;
}

.grid-item {
  //   background-color: rgba(255, 255, 255, 0.8);
  //   border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

@media screen and (max-width: 1140px) {
  .grid-item {
    padding: 0;
  }
}

@media screen and (max-width: 990px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: auto;
  }
}

.card-custom {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 288px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.grid-image {
  padding: 1rem;
}

.card-body-custom {
  padding: 1.25rem;
  text-align: center;
}

.card-title-custom {
  font-size: 24px;
  padding-bottom: 0.5rem;
}

.card-text-custom {
  font-size: 16px;
}

// .grid-image {
//   object-fit: cover;
//   width: 100%;
// }
</style>
