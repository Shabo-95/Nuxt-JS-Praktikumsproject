<template>
  <div>
    <div class="container w-50 p-5 mt-4 bg-light border border-primary rounded">
      <div class="row d-flex align-items-center justify-content-center p-2">
        <h3>Suche deine lieblings Produkte aus 😋</h3>
      </div>
      <div class="row d-flex align-items-center justify-content-center p-2">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
        />
      </div>
    </div>

    <div class="container products">
      <div class="row justify-content-around">
        <div
          class=".col-6 .col-sm-4 mt-5"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <div class="card h-100" style="width: 18rem">
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
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: ['products'],
  data() {
    return {
      search: '',
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
