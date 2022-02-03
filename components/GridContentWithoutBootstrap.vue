<template>
  <div class="grid-container">
    <div class="grid-item item-1">
      <Card />
    </div>
    <div class="grid-item item-2">
      <Card />
    </div>
    <div class="grid-item item-3">
      <Card />
    </div>
    <div class="grid-item item-4">
      <Card />
    </div>
  </div>
</template>

<script>
export default {}
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
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  // border: 10px solid blue;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;
  padding: 6%;
}

@media (max-width: 1140px) {
  .grid-container {
    max-width: 75%;
    padding: 2%;
  }
}

@media (max-width: 960px) {
  .grid-container {
    padding: 4%;
  }
}

@media (max-width: 720px) {
  .grid-container {
    grid-template-columns: 1fr;
    max-width: 90%;
  }
}

@media (max-width: 540px) {
  .grid-container {
    max-width: 100%;
  }
}

.grid-item {
  // background-color: orange;
  // border: 4px solid red;
  padding: 5px;
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
