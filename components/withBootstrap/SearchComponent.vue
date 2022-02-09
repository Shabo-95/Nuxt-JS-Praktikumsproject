<template>
  <div
    class="container custom-width p-5 mt-4 bg-light border border-primary border-rad"
  >
    <div class="row d-flex align-items-center justify-content-center p-2">
      <h3>Suche deine lieblings Produkte aus 😋</h3>
    </div>
    <div class="row d-flex align-items-center justify-content-center p-2">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchText"
        @input="updateSearchText"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    updateSearchText() {
      console.log('SearchComponent')
      this.$emit('updateSearchText', this.searchText)
    },
  },
}
</script>

<style lang="scss" scoped>
  .custom-width {
    width: 75%;
  }

  @media only screen and (min-width: 768px) {
    .custom-width {
      width: 50%;
    }
  }
</style>
