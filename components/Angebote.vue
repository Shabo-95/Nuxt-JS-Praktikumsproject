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
      <h1 class="title">{{ angebotTitle }}</h1>
      <h3 class="sub-title">{{ subTitle }}</h3>
      <h5 class="text">
        {{ text }}
      </h5>
      <NuxtLink class="link" to="/Products">
        <div class="button-div">
          <button class="custom-button">
            Jetzt einkaufen
          </button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    angebotTitle: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
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
  box-shadow: 0 0 10px #f0ad4e;

  font-family: $acc-font;
}
.custom-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  width: 100%;
  height: auto;
  img {
    border-radius: 50px;
  }
}

.title {
  padding: 1rem;
}
.sub-title {
  padding: 1rem;
}
.text {
  padding: 1rem;
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
  font-family: $acc-font;
  font-size: 16px;
  font-weight: bold;
}

.custom-button:hover {
  background-color: #0069d9;
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
    max-width: 80%;
  }
  .custom-image {
    display: block;
    text-align: center;
    padding: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    padding: 1rem;
    font-size: 25px;
    font-weight: bold;
  }
  .sub-title {
    padding: 1rem;
    font-size: 20px;
    font-weight: bold;
  }
  .text {
    padding: 1rem;
    font-size: 20px;
  }
  .angebote {
    padding: 0;
  }
  .button-div { 
      padding: 1rem;
  }
}
</style>