<template>
  <!-- First Accordion -->
  <div class="accordion">
    <button ref="myRef" @click="calculateHeight()"> Click Me </button>
    <!-- <p> {{ height }} </p> -->
    <div class="accordion__item" v-for="(item, id) in items" :key="id">
      <button
        class="accordion__header"
        v-on:click="myfunc2(id)"
        :class="[item.open ? 'active' : '']"
      >
        <strong>{{ item.header }}</strong
        ><font-awesome-icon :icon="['fas', 'angle-down']" />
      </button>
      <div ref="aco" :style="[item.open ? {'max-height': `${item.height}px`} : {'max-height': '0'}]" class="accordion__body" :class="[item.open ? 'active' : '']" @click="myfunc">
        <p class="accordion__content" >{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      // :style="[item.open ? {'max-height': this.$ref.clientHeight} : {'max-height': '0'}]"
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
          height: 0
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
          height: 0
        },
        accordion3: {
          header: "STIHL in einem neuen Licht – Anke Kleinschmit",
          body:
            "In der Jury zu sitzen, war nicht ganz einfach. Auf den ersten Blick haben mich alle Ideen und vor " +
            "allem ihre Bandbreite enorm begeistert. Es ging um innovative Vertriebs- und Geschäftsmodelle, digitale " +
            "Angebote sowie Produktoptimierungen und gänzlich neue Produktideen. Letztere haben mich natürlich besonders " +
            "interessiert.",
          open: false,
          height: 0
        },
        accordion4: {
          header: "Akademischer Spirit im Unternehmen – Dr. Tim Gegg",
          body:
            "Ich selbst bin vor mehr als 20 Jahren von der Uni Karlsruhe – mittlerweile ist es das Karlsruher Institut für " +
            "Technologie (KIT) – als studentischer Mitarbeiter zu STIHL gekommen. Heute arbeite ich als Leiter der Digitalisierung " +
            "eng mit Studierenden zusammen, da die Abteilung zu einem Großteil aus Studenten besteht.",
          open: false,
          height: 0
        },
      },
      customHeight: 0,
    };
  },
  methods: {
    myfunc() {
      console.log("this.$refs",this.$refs)
      for(var ref in this.$refs) {
        console.log("ref",ref)
      }
    },
    calculateHeight() {
      this.$refs.aco.forEach(ref => { 
        this.customHeight = ref.scrollHeight;
        console.log("this.customHeight",this.customHeight)
        return ref.scrollHeight
      });
      // this.height = this.$refs.aco[0].scrollHeight;
      // console.log("this.height",this.height);
    },
    myfunc2(item_ID) {
      // item_ID.item.open = !item_ID.item.open;
      this.items[item_ID].open = !this.items[item_ID].open;
      this.items[item_ID].height = "100px";
      console.log("item_ID", this.items[item_ID].height);
    }
  },

};
</script>

<style lang="scss"></style>
