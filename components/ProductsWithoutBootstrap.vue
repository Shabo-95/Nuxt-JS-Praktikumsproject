<template>
  <CardWithoutBootstrap :filteredProducts="filteredProducts" />
</template>

<script>
export default {
  name: 'ProductsWithoutBootstrap',
  props: {
    filteredProducts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
