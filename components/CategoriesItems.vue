<template>
  <div class="card-container">
    <NuxtLink class="nav-link" :to="`/Categories/${title}`">
      <div class="card-custom">
        <ImageComponent
          :source="image"
          :height="240"
          :width="180"
          class="card-image"
        />
        <div class="card-footer-custom">
          <p class="card-text-custom">{{ title }}</p>
        </div>
      </div>
    </NuxtLink>
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
}
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-custom {
  width: 18rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 10px #f0ad4e;
  border-radius: 50px;
  transition: all 0.5s ease-in-out;
}

.card-custom:hover {
  transform: scale(1.1);
}

.nav-link {
  padding: 0;
}

.card-image {
  padding: 2rem;
}

.card-text-custom {
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  padding-bottom: 0.5rem;
}
.card-footer-custom {
  width: 100%;
  background-color: #00000008;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  text-align: center;
}
</style>
