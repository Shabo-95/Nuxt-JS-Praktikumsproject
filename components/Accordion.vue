<template>
  <!-- First Accordion -->
  <div class="accordion">
    <div class="accordion__item" v-for="(item, id) in items" :key="id">
      <button
        class="accordion__header"
        v-on:click="item.open = !item.open"
        v-bind:class="[item.open ? 'active' : '']"
      >
        <strong>{{ item.header }}</strong
        ><font-awesome-icon :icon="['fas', 'angle-down']" />
      </button>
      <div class="accordion__body" v-bind:class="[item.open ? 'active' : '']">
        {{ item.body }}
      </div>
    </div>
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
            "Als Mitglied der Familie Stihl bin ich im Beirat tätig, " +
            "der sich in erster Linie mit der Strategie beschäftigt. Beim STIHL Award war spannend, " +
            "in welcher Weise die Studierenden unsere strategischen Themenfelder mit verschiedenen " +
            "aktuellen Entwicklungen und auch ihren Wahrnehmungen und Herangehensweisen in Verbindung " +
            "gebracht haben. Zwischendurch die Blickrichtung zu ändern und neue Impulse aufzunehmen, " +
            "macht Spaß und ist aufschlussreich.",
          open: false,
        },
        accordion2: {
          header:
            "Die eigene Innovationskraft erproben – Dr. Michael Prochaska",
          body:
            "Was Nachwuchskräfte angeht, achten wir bei STIHL auf drei Dinge: die fachliche " +
            "Qualifikation, die Extraaktivitäten neben Studium oder Ausbildung und die Chemie. " +
            "Letztere ist uns besonders wichtig. Der STIHL CUTTING EDGE AWARD erfüllt alle drei Wünsche " +
            "auf einmal: Die Teilnehmerinnen und Teilnehmer sind fachlich qualifiziert, engagiert und setzen " +
            "sich intensiv mit unserem Arbeitsumfeld auseinander, um neue, innovative Ansätze zu finden.",
          open: false,
        },
        accordion3: {
          header: "STIHL in einem neuen Licht – Anke Kleinschmit",
          body:
            "In der Jury zu sitzen, war nicht ganz einfach. Auf den ersten Blick haben mich alle Ideen und vor " +
            "allem ihre Bandbreite enorm begeistert. Es ging um innovative Vertriebs- und Geschäftsmodelle, digitale " +
            "Angebote sowie Produktoptimierungen und gänzlich neue Produktideen. Letztere haben mich natürlich besonders " +
            "interessiert.",
          open: false,
        },
        accordion4: {
          header: "Akademischer Spirit im Unternehmen – Dr. Tim Gegg",
          body:
            "Ich selbst bin vor mehr als 20 Jahren von der Uni Karlsruhe – mittlerweile ist es das Karlsruher Institut für " +
            "Technologie (KIT) – als studentischer Mitarbeiter zu STIHL gekommen. Heute arbeite ich als Leiter der Digitalisierung " +
            "eng mit Studierenden zusammen, da die Abteilung zu einem Großteil aus Studenten besteht.",
          open: false,
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
