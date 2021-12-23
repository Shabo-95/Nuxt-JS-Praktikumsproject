<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="custom-modal" @click.stop>
      <div class="close" @click="$emit('close-modal')">
        <img
          class="close-img"
          :src="require('~/assets/images/icons/close-icon.png')"
          alt=""
        />
      </div>
      <div class="custom-modal-content">
        <h6>Produkt ist im Warenkorb!</h6>
        <p>Ihre Produkt ist erfolgreich in Ihrem Warenkorb gelandet.</p>
        <button class="btn btn-primary">zur Kasse gehen</button>
      </div>
    </div>
    <!-- <div class="close">
      <img class="close-img" :src="require('~/assets/close-icon.png')" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.custom-modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  /* padding: 60px 0; */
  border-radius: 20px;
}

.custom-modal-content {
  margin-top: 150px;
}

.close {
  /* margin: 10% 0 0 16px; */
  padding: 20px;
  cursor: pointer;
}

.close-img {
  width: 20px;
  height: 20px;
}

/* .check {
  width: 150px;
} */

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
