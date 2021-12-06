<template>
  <div class="home">
    <HeaderImage />
    <HeaderText />
    <Accordion />
    <GridContent />
    <!-- <Overlay />
    <OverlayButton /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import HeaderText from "@/components/HeaderText.vue";
import Accordion from "@/components/Accordion.vue";
import GridContent from "@/components/GridContent.vue";
import Overlay from "@/components/Overlay.vue";
import OverlayButton from "@/components/OverlayButton.vue";

export default {
  name: "Home",
  components: {
    HeaderImage,
    HeaderText,
    Accordion,
    GridContent,
    Overlay,
    OverlayButton,
  },
};
</script>
