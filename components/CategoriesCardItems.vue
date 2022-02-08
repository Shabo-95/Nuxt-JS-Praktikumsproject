<template>
  <div class="card-container">
    <div class="card-custom">
      <NuxtLink class="nav-link" :to="`/Products/${id}`">
        <ImageComponent :source="image" :height="240" :width="180" />
      </NuxtLink>
      <div class="card-footer-custom">
        <p class="card-text-custom">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-container > div {
  flex: 0 0 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
  /*demo*/
}

@media (max-width: 768px) {
  .custom-container > div {
    flex: 0 0 100%;
  }
}

.card-custom {
  // width: 18rem;

  display: flex;
  // flex: 0 0 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.125);
}
// .card-custom {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   background-color: white;
//   border: 1px solid rgba(0, 0, 0, 0.125);
//   border-radius: 0.25rem;
//   // width: 18rem;
//   height: 100%;
//   margin-left: auto;
//   margin-right: auto;
// }

.card-body-custom {
  padding: 1.25rem;
  text-align: center;
  flex-grow: 1;
}

.card-title-custom {
  font-size: 24px;
  padding-bottom: 0.5rem;
}

.card-footer-custom {
  width: 100%;
  background-color: #00000008;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  text-align: center;
}

// .nav-link {
//   width: 100%;
// }

// .grid-image {
//   object-fit: cover;
//   width: 50%;
// }

// @media screen and (max-width: 1140px) {

// }
</style>
