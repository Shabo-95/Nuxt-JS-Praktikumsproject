<template>
  <div class="custom-container">
    <div class="custom-image">
      <img
        src="@/assets/images/header-image/sale.jpeg"
        alt="No Picture"
        height="300"
        width="300"
      />
    </div>
    <div class="angebote">
      <h1 class="title">Bis zu 50% Rabbat</h1>
      <h3 class="sub-title">Nur bis zum 31. März</h3>
      <h5 class="text">
        Lassen Sie sich von uns vor Ort begeistern und besuchen Sie uns in
        unserem Geschäft in der Flachstraße in dem Westcenter, Wir werden uns
        auf Sie freuen.
      </h5>

      <button class="custom-button" @click="$nuxt.$emit('open-modal')">
        Jetzt einkaufen
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.custom-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  max-width: 1140px;

  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffbc8;
}
.custom-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.title {
  padding: 1.5rem;
}
.sub-title {
  padding: 1.5rem;
}
.text {
  padding: 1.5rem;
}
.angebote {
  padding: 1rem;
}
.custom-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem;
  width: 100%;
}

@media (max-width: 1200px) {
  .custom-container {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .custom-container {
    max-width: 720px;
  }
  .custom-image {
    padding: 1rem;
  }
  .title {
    font-size: 32px;
  }
  .angebote {
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .custom-container {
    max-width: 540px;
    flex-direction: column;
  }
  .angebote {
    padding: 3rem;
  }
  .title {
    text-align: center;
    font-size: 40px;
  }
  .sub-title {
    text-align: center;
  }
  .text {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .custom-container {
    max-width: 540px;
  }
}
</style>
