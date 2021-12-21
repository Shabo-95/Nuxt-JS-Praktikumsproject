<template>
  <div class="container mt-5 mb-5">
    <div class="row custom-border border-primary">
      <div
        class="col-md-5 p-3 d-flex justify-content-center align-items-center"
      >
        <img
          :src="productDetails.image"
          class="image__custom"
          alt="No Picture"
          height="300"
          width="300"
        />
      </div>
      <div class="col-md-7 p-5 p-md-2 border-primary custom-border-left">
        <h1 class="p-4">{{ productDetails.title }}</h1>
        <h5 class="p-4">{{ productDetails.description }}</h5>
        <h3 class="p-4">Price: {{ productDetails.price }} $</h3>
        <div class="d-flex justify-content-center align-items-center m-3">
          <button class="btn w-100 custom-border-radius btn-primary p-3">
            Warenkorb legen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productDetails: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 576px) {
  .custom-border {
    border: 2px solid;
    border-radius: 50px;
  }
}

@media (min-width: 768px) {
  .custom-border-left {
    border-left: 2px solid;
  }
}

.image {
  &__custom:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  &__custom {
    transition: all 0.5s ease-in-out;
  }
}
.custom-border-radius {
  border-radius: 50px;
}
</style>
