<template>
  <!-- First Accordion -->
  <div class="accordion">
    <AccordionItems v-for="(item, id) in items" :key="id"/>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      items: {
        accordion1: {
          header: "Begeistert an Zukunftsthemen tüfteln – Selina Stihl",
          body:
            "<p>Als Mitglied der Familie Stihl bin ich im Beirat tätig, " +
            "der sich in erster Linie mit der Strategie beschäftigt. Beim STIHL Award war spannend, " +
            "in welcher Weise die Studierenden unsere strategischen Themenfelder mit verschiedenen " +
            "aktuellen Entwicklungen und auch ihren Wahrnehmungen und Herangehensweisen in Verbindung " +
            "gebracht haben. Zwischendurch die Blickrichtung zu ändern und neue Impulse aufzunehmen, " +
            "macht Spaß und ist aufschlussreich.</p>",
          open: false,
          height: 0
        },
        accordion2: {
          header:
            "Die eigene Innovationskraft erproben – Dr. Michael Prochaska",
          body:
            "<p>Was Nachwuchskräfte angeht, achten wir bei STIHL auf drei Dinge: die fachliche " +
            "Qualifikation, die Extraaktivitäten neben Studium oder Ausbildung und die Chemie. " +
            "Letztere ist uns besonders wichtig. Der STIHL CUTTING EDGE AWARD erfüllt alle drei Wünsche " +
            "auf einmal: Die Teilnehmerinnen und Teilnehmer sind fachlich qualifiziert, engagiert und setzen " +
            "sich intensiv mit unserem Arbeitsumfeld auseinander, um neue, innovative Ansätze zu finden.</p>",
          open: false,
          height: 0
        },
        accordion3: {
          header: "STIHL in einem neuen Licht – Anke Kleinschmit",
          body:
            "<p>In der Jury zu sitzen, war nicht ganz einfach. Auf den ersten Blick haben mich alle Ideen und vor " +
            "allem ihre Bandbreite enorm begeistert. Es ging um innovative Vertriebs- und Geschäftsmodelle, digitale " +
            "Angebote sowie Produktoptimierungen und gänzlich neue Produktideen. Letztere haben mich natürlich besonders " +
            "interessiert.</p>",
          open: false,
          height: 0
        },
        accordion4: {
          header: "Akademischer Spirit im Unternehmen – Dr. Tim Gegg",
          body:
            "<p>Ich selbst bin vor mehr als 20 Jahren von der Uni Karlsruhe – mittlerweile ist es das Karlsruher Institut für " +
            "Technologie (KIT) – als studentischer Mitarbeiter zu STIHL gekommen. Heute arbeite ich als Leiter der Digitalisierung " +
            "eng mit Studierenden zusammen, da die Abteilung zu einem Großteil aus Studenten besteht.</p>",
          open: false,
          height: 0
        },
      },
    };
  },
  methods: {
    openCloseAccordion(item_ID) {
      /* To Change open-Variable from false to true and contrariwise  */
      this.items[item_ID].open = !this.items[item_ID].open;

      /* To Dynamically Copy The Height it needs into the Element */
      let accordionRef = 'accordion__body_' + item_ID;
      this.items[item_ID].height = this.$refs[accordionRef][0].scrollHeight;

      console.log("Add Event Listener 😍")

      /* To Dynamically Change The Height When Resizing */
      window.addEventListener("resize", () => {
        let accordionRef = 'accordion__body_' + item_ID;
        this.items[item_ID].height = this.$refs[accordionRef][0].scrollHeight;
      });
    },
  },
  // mounted: function () {
  //   console.log("ready !!!")
  //   window.addEventListener('resize', this.openCloseAccordion)
  // },
  // beforeDestroy: function () {
  //   console.log("beforeDestroy !!!")
  //   window.removeEventListener('resize', this.openCloseAccordion)
  // }
};
</script>

<style lang="scss" scoped>
.accordion {
  max-width: 50%;
  margin: 5% auto;
  overflow: hidden;
  border-radius: 4px;
  font-family: $acc-font;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    width: 100%;
    background: #1f8dd6;
    border: none;
    outline: none;
    border-bottom: 1px solid #54a0ff;
    color: #f3f3f3;
    cursor: pointer;
  }
  &__header svg {
    transition: all 0.5s ease-in-out;
  }

  &__header.active {
    background-color: #1070b1;
  }
  &__header.active svg {
    transform: rotate(180deg);
    transition: all 0.5s ease-in-out;
  }

  &__body {
    background-color: #f3f3f3;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  &__content {
    padding: 1rem 2.5rem 1rem 2.5rem;
  }

  p {
    margin: 0;
  }
}
</style>
