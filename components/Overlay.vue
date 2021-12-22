<template>
  <transition name="fade" appear>
    <div class="modal-overlay"></div>
  </transition>
</template>

<script>
export default {
  name: 'Overlay',
}
</script>

<style lang="scss">
.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
