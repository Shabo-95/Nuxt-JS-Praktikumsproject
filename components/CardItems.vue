<template>
  <div class="card-custom">
    <NuxtLink class="nav-link" :to="`/Products/${id}`">
      <ImageComponent :source="image" :height="240" :width="180" />
    </NuxtLink>
    <div class="card-body-custom">
      <h4 class="card-title-custom">{{ title }}</h4>
    </div>
    <div class="card-footer-custom">
      <p class="card-text-custom">Preis: {{ price }}$</p>
      <button class="custom-button" @click="$nuxt.$emit('open-modal')">
        Warenkorb legen
      </button>
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
}
</script>

<style lang="scss" scoped>
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

.card-custom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 18rem;
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
  flex-grow: 1;
}

.card-title-custom {
  font-size: 24px;
  padding-bottom: 0.5rem;
}

.card-text-custom {
  font-size: 16px;
}

.card-footer-custom {
  width: 100%;
  background-color: #00000008;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  text-align: center;
}

.custom-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem;
}

.nav-link {
  width: 100%;
}

// .grid-image {
//   object-fit: cover;
//   width: 100%;
// }
</style>
