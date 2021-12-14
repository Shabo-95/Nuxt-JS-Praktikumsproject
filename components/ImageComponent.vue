<template>
  <figure v-lazyload class="image__wrapper">
    <ImageSpinner class="image__spinner" />
    <img
      class="card-img-top p-4 image__item"
      :data-url="source"
      alt="no picture available"
      :height="height"
      :width="width"
    />
  </figure>
</template>

<script>
import ImageSpinner from './ImageSpinner'

export default {
  name: 'ImageComponent',
  props: {
    source: {
      type: String,
      default: '',
      required: true,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  components: {
    ImageSpinner,
  },
}
</script>

<style scoped lang="scss">
.image {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    &.loaded {
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
          border: 0;
        }

        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }

  &__item {
    width: 100%;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
