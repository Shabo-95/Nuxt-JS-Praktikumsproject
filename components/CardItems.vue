<template>
  <NuxtLink class="nav-link" :to="`/Products/${id}`">
    <div class="card-custom">
      <ImageComponent
        :source="image"
        :height="240"
        :width="180"
        class="grid-image"
      />
      <div class="card-body-custom">
        <h4 class="card-title-custom">{{ title }}</h4>
      </div>
      <div class="card-footer-custom">
        <p class="card-text-custom">Preis: {{ price }}€</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
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
      type: String,
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
  // align-items: center;
  // justify-content: center;

  background-color: white;
  border: 1px solid #f0ad4e;
  border-radius: 50px;
  outline: none;
  border-color: #9ecaed;
  box-shadow: 0 0 10px #f0ad4e;
  width: 18rem;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease-in-out;
}

.card-custom:hover {
  transform: scale(1.1);
}

.grid-image {
  padding: 2rem;
  padding-bottom: 0.5rem;
}

.card-body-custom {
  padding: 1.25rem;
  text-align: center;
  flex-grow: 1;
}

.card-title-custom {
  font-family: $acc-font;
  font-size: 18px;
  //font-weight: bold;
  color: black;
}

.card-text-custom {
  font-family: $acc-font;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 0;
  padding: 5px;
}

.card-footer-custom {
  width: 100%;
  background-color: #00000008;
  padding: 1rem;
  border-top: 1px solid #f0ad4e;
  box-shadow: 0 0 10px #f0ad4e;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
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
  padding: 0;
}

// .grid-image {
//   object-fit: cover;
//   width: 100%;
// }
</style>
