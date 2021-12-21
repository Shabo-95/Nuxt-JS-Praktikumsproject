<template>
  <div class="accordion">
    <AccordionItems
      v-for="(item, id) in items"
      :key="id"
      v-bind="item"
      @clicked="itemClicked"
      :id="id"
    />
  </div>
</template>

<script>
import AccordionItems from './AccordionItems'

export default {
  name: 'Accordion',
  components: {
    AccordionItems,
  },
  data() {
    return {
      items: [
        {
          header: 'Begeistert an Zukunftsthemen tüfteln – Selina Stihl',
          body:
            '<p>Als Mitglied der Familie Stihl bin ich im Beirat tätig, ' +
            'der sich in erster Linie mit der Strategie beschäftigt. Beim STIHL Award war spannend, ' +
            'in welcher Weise die Studierenden unsere strategischen Themenfelder mit verschiedenen ' +
            'aktuellen Entwicklungen und auch ihren Wahrnehmungen und Herangehensweisen in Verbindung ' +
            'gebracht haben. Zwischendurch die Blickrichtung zu ändern und neue Impulse aufzunehmen, ' +
            'macht Spaß und ist aufschlussreich.</p>',
        },
        {
          header:
            'Die eigene Innovationskraft erproben – Dr. Michael Prochaska',
          body:
            '<p>Was Nachwuchskräfte angeht, achten wir bei STIHL auf drei Dinge: die fachliche ' +
            'Qualifikation, die Extraaktivitäten neben Studium oder Ausbildung und die Chemie. ' +
            'Letztere ist uns besonders wichtig. Der STIHL CUTTING EDGE AWARD erfüllt alle drei Wünsche ' +
            'auf einmal: Die Teilnehmerinnen und Teilnehmer sind fachlich qualifiziert, engagiert und setzen ' +
            'sich intensiv mit unserem Arbeitsumfeld auseinander, um neue, innovative Ansätze zu finden.</p>',
        },
        {
          header: 'STIHL in einem neuen Licht – Anke Kleinschmit',
          body:
            '<p>In der Jury zu sitzen, war nicht ganz einfach. Auf den ersten Blick haben mich alle Ideen und vor ' +
            'allem ihre Bandbreite enorm begeistert. Es ging um innovative Vertriebs- und Geschäftsmodelle, digitale ' +
            'Angebote sowie Produktoptimierungen und gänzlich neue Produktideen. Letztere haben mich natürlich besonders ' +
            'interessiert.</p>',
        },
        {
          header: 'Akademischer Spirit im Unternehmen – Dr. Tim Gegg',
          body:
            '<p>Ich selbst bin vor mehr als 20 Jahren von der Uni Karlsruhe – mittlerweile ist es das Karlsruher Institut für ' +
            'Technologie (KIT) – als studentischer Mitarbeiter zu STIHL gekommen. Heute arbeite ich als Leiter der Digitalisierung ' +
            'eng mit Studierenden zusammen, da die Abteilung zu einem Großteil aus Studenten besteht.</p>',
        },
      ],
    }
  },

  // Wichtig: $emit send variables and elements
  methods: {
    itemClicked(data) {
      console.log('This is Opened', data)
      // console.log('data.el', data.el)
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
}
</script>

<style lang="scss" scoped>
.accordion {
  max-width: 50%;
  margin: 5% auto;
  overflow: hidden;
  border-radius: 4px;
  font-family: $acc-font;
}
</style>
