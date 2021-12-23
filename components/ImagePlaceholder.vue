<template>
  <div class="flex-center custom-margin">
    <figure v-lazyload class="image__wrapper">
      <ImageSpinner class="image__spinner" />
      <img
        class="card-img-top p-4 image__item image__custom"
        :data-url="source"
        alt="no picture available"
      />
    </figure>
  </div>
</template>

<script>
import ImageSpinner from './ImageSpinner'

export default {
  components: {
    ImageSpinner,
  },
  props: {
    // sourceSmall: {
    //   type: String,
    //   required: true,
    // },
    // sourceBig: {
    //   type: String,
    //   required: true,
    // },
    source: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.custom-margin {
  margin-top: 50px;
  margin-bottom: 50px;
}

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
