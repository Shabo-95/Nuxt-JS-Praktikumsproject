<template>
  <div class="search-container">
    <div class="search-title-container">
      <h3>Suche deine lieblings Produkte aus 😋</h3>
    </div>
    <div class="input-search-container">
      <input
        class="input-search"
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
.search-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  border: 1px solid #0275d8;
  border-radius: 50px;
  box-shadow: 0 0 10px #0275d8;
  background-color: #f8f9fa;
}

.search-title-container {
  padding: 0.5rem;
}

.input-search-container {
  width: 100%;
  padding: 0.5rem;
}

.input-search {
  display: block;
  width: 100%;
  // height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  // transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
}
.input-search:focus {
  transform: scale(1.5px);
  box-shadow: 0 0 5px #00bfff;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

@media only screen and (max-width: 768px) {
  .search-container {
    width: 75%;
  }
}

@media (max-width: 576px) {
  .search-container {
    width: 90%;
    padding: 25px;
  }
  h3 {
    font-size: 18px;
  }
}
</style>
