<template>
  <div class="custom-container">
    <div class="custom-image">
      <ImageComponent :source="image" :height="300" :width="300" />
    </div>
    <div class="details">
      <h1 class="title">{{ title }}</h1>
      <h5 class="description">{{ description }}</h5>
      <h3 class="price">Price: {{ price }} $</h3>
      <button class="custom-button" @click="$nuxt.$emit('open-modal')">
        Warenkorb legen
      </button>
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
    description: {
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
.custom-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 1rem;
  max-width: 1140px;

  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px #f0ad4e;
}

.custom-image {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  padding: 1.5rem;
  transition: all 0.5s ease-in-out;
}

.custom-image:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.5s ease-in-out;
}

.details {
  padding: 1rem;
}
.title {
  padding: 1.5rem;
}
.description {
  padding: 1.5rem;
}
.price {
  padding: 1.5rem;
}

.custom-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem;
  width: 100%;
}

.custom-button:hover {
  background-color: #0069d9;
}

@media (max-width: 1200px) {
  .custom-container {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .custom-container {
    max-width: 720px;
  }
  .title {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .custom-container {
    max-width: 540px;
    flex-direction: column;
  }
  .title {
    text-align: center;
    font-size: 40px;
  }
  .description {
    text-align: center;
  }
  .price {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .custom-container {
    max-width: 95%;
  }
}
</style>
