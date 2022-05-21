<template>
  <div class="content">
    <div class="box">
      <h2 class="kontaktTitle">Kontakt</h2>
      <p>{{ title }}</p>
      <p>{{ address }}</p>
      <p>{{ zipCode }}</p>
      <div class="kontaktInfo"></div>
      <p><b>Tel: {{ telefon }}</b></p>
      <p><b>Email: {{ email }}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    telefon: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    
  },
}
</script>

<style lang="scss" scoped>
div.content {
  padding: 1px 16px;
  /* border-style: solid; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.box {
  width: 500px;
  height: 500px;
  max-width: 100%;

  font-family: $acc-font;
  font-size: 20px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f8f9fa;

  border: 1px solid #0275d8;
  border-radius: 50px;
  box-shadow: 0 0 10px #0275d8;
}
@media screen and (max-width: 700px) {
  div.content {
    margin-left: 0;
  }
}
.kontaktTitle {
  margin-bottom: 15%;
}
.kontaktInfo {
  margin-bottom: 10%;
}
</style>
