<template>
  <div class="container products">
    <div class="row justify-content-around">
        <div
          class=".col-6 .col-sm-4 mt-5"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card h-100" style="width: 18rem;">
            <img
              class="card-img-top"
              :src="product.image"
              alt="no picture available"
              height="240"
              width="180"
            />
            <div class="card-body text-center">
              <h5 class="card-title text-center">{{ product.title }}</h5>
            </div>
            <div class="card-footer text-center">
                <p class="card-text">Price: {{ product.price }}$</p>
                <a class="btn btn-primary">Warenkorb legen</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Products",
  props: ['products'],
};
</script>

<style lang="scss" scope>
.products {
    &__images {
        // width: 200px;
        // height: 200px;
    }
}
.flexible {
    flex-grow: 1;
}
</style>
