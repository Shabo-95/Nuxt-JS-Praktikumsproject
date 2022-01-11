<template>
  <div class="AccCustomContainer">
    <div class="accordion">
      <AccordionItems
        v-for="(item, id) in items"
        :key="id"
        v-bind="item"
        @clicked="itemClicked"
        :id="id"
      />
    </div>
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
          header: 'Lorem ipsum dolor sit amet consectetur.',
          body:
            '<p>Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam, ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam, ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam.</p>',
        },
        {
          header: 'Lorem ipsum dolor sit amet consectetur.',
          body:
            '<p>Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam.</p>',
        },
        {
          header: 'Lorem ipsum dolor sit amet consectetur.',
          body:
            '<p>Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam.</p>',
        },
        {
          header: 'Lorem ipsum dolor sit amet consectetur.',
          body:
            '<p>Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam ' +
            'Quos tempore laboriosam omnis odit ea, molestias optio veniam.</p>',
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

.AccCustomContainer {
  @include flexCenter;

  .accordion {
    width: 75%;
    margin: 5% auto;
    overflow: hidden;
    border-radius: 4px;
    font-family: $acc-font;
  }

  @media only screen and (min-width: 768px) {
    .accordion {
      width: 60%;
    }
  }
}
</style>
