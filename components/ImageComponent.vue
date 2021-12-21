<template>
  <figure v-lazyload class="image__wrapper">
    <ImageSpinner class="image__spinner" />
    <img
      class="card-img-top p-4 image__item image__custom"
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
    // sourceSmall: {
    //   type: String,
    //   default: '',
    //   required: true,
    // },
    // sourceBig: {
    //   type: String,
    //   default: '',
    //   required: true,
    // },
    source: {
      type: String,
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
  // data() {
  //   return {
  //     source: '',
  //   }
  // },
  // mounted() {
  //   if (window.innerWidth > 600) {
  //     this.source = this.sourceBig
  //   } else {
  //     this.source = this.sourceSmall
  //   }
  //   // mixin für resize listener
  // },
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

  &__custom:hover {
    padding: 0.5rem !important;
  }
}
</style>
