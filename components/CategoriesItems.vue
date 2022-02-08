<template>
  <div class="card-container">
    <div class="card-custom">
      <NuxtLink class="nav-link" :to="`/Categories/${title}`">
        <ImageComponent :source="image" :height="240" :width="180" />
      </NuxtLink>
      <div class="card-footer-custom">
        <p class="card-text-custom">{{ title }}</p>
      </div>
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
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-custom {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 50px;
}
.card-text-custom {
  font-weight: bold;
  text-transform: uppercase;
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
