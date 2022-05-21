<template>
  <div class="photo-grid">
    <div class="card card-tall card-wide">
      <img
        src="https://source.unsplash.com/fPbLnMMd8BU/640x800"
        alt="image2"
      />
    </div>
    <div class="card card-wide">
      <img
        src="https://source.unsplash.com/FT1ePvQ1HlE/640x800"
        alt="image2"
      />
    </div>
    <div class="card">
      <img
        src="https://source.unsplash.com/JC8ggPmYEMo/640x800"
        alt="image2"
      />
    </div>
    <div class="card">
      <img
        src="https://source.unsplash.com/kKPWbHT5eMI/640x800"
        alt="image2"
      />
    </div>
    <div class="card card-wide">
      <img
        src="https://source.unsplash.com/5mYVM_fDv/640x800"
        alt="image2"
      />
    </div>
    <div class="card">
      <img
        src="https://source.unsplash.com/ShEvOOkm5SU/640x800"
        alt="image2"
      />
    </div>
    <div class="card card-wide">
      <img
        src="https://source.unsplash.com/__jmhIsDCK0/640x800"
        alt="image2"
      />
    </div>
    <div class="card card-tall card-wide">
      <img
        src="https://source.unsplash.com/82auqXjSxZI/640x800"
        alt="image2"
      />
    </div>
    <div class="card card-tall">
      <img
        src="https://source.unsplash.com/Xo5CULzxaYE/640x800"
        alt="image2"
      />
    </div>
    <div class="card">
      <img
        src="https://source.unsplash.com/T6PK5AaZ9ww/640x800"
        alt="image2"
      />
    </div>
    <div class="card">
      <img
        src="https://source.unsplash.com/jKt5LwMYlxw/640x800"
        alt="image2"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #353535;
  font-size: 3rem;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card:hover {
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
    rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
  transform: translateY(-3px) scale(1.1);
  z-index: 100;
}

.photo-grid {
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;
  grid-auto-flow: dense;

  padding: 1rem;
}

.card-strech {
  grid-auto-flow: row;
}

/* Medium screens */
@media screen and (min-width: 600px) {
  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }
}

::v-deep img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
