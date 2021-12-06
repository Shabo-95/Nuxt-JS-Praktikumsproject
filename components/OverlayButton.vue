<template>
  <button
    class="btn btn-primary mt-5 mb-5"
    @click="$modal.show('example-adaptive')"
  >
    Open an Adaptive Overlay (Modal)
  </button>
</template>

<script>
export default { name: "OverlayButton" };
</script>

<style lang="scss"></style>
