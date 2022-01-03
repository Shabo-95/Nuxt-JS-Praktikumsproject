<template>
  <div class="container mt-5 mb-5" style="background-color: #fffbc8">
    <div class="row custom-border border-primary">
      <div
        class="col-md-5 p-3 d-flex justify-content-center align-items-center"
      >
        <img
          src="@/assets/images/header-image/sale.jpeg"
          class="image__custom"
          alt="No Picture"
          height="300"
          width="300"
        />
      </div>
      <div class="col-md-7 p-5 p-md-2 border-primary custom-border-left">
        <h1 class="p-4">Bis zu 50% Rabbat</h1>
        <h3 class="p-4">Nur bis zum 31. März</h3>
        <h5 class="p-4">
          Lassen Sie sich von uns vor Ort begeistern und besuchen Sie uns in
          unserem Geschäft in der Flachstraße in dem Westcenter, Wir werden uns
          auf Sie freuen.
        </h5>
        <div class="d-flex justify-content-center align-items-center m-3">
          <button
            class="btn w-100 custom-border-radius btn-primary p-3"
            @click="$nuxt.$emit('open-modal')"
          >
            Jetzt einkaufen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
