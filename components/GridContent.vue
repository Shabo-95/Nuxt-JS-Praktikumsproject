<template>
  <div class="grid-container">
    <div class="grid-item item-1">
      <CardGrid :source="source" />
    </div>
    <div class="grid-item item-2">
      <CardGrid :source="source" />
    </div>
    <div class="grid-item item-3">
      <CardGrid :source="source" />
    </div>
    <div class="grid-item item-4">
      <CardGrid :source="source" />
    </div>
  </div>
</template>

<script>
import CardGrid from '~/components/CardGrid.vue'

export default {
  components: {
    CardGrid,
  },
  props: {
    source: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 30px;
}

::v-deep img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.grid-container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 1200px) {
  .grid-container {
    max-width: 800px;
  }
}

@media (max-width: 991px) {
  .grid-container {
    max-width: 600px;
  }
}

@media (max-width: 767px) {
  .grid-container {
    padding: 0;
    grid-template-columns: 1fr;
    max-width: 540px;
  }
}

.grid-item {
  padding: 0 15px;
  text-align: center;
}

.item-1 {
}

.item-2 {
}

.item-3 {
}

.item-4 {
}
</style>
