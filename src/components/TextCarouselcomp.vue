<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slideType"
      :key="i"
    >
      <v-sheet
        :color="slidecolors[i]"
        height="100%"
        class="d-flex fill-height justify-center align-center"
      >
        <div v-if="slide === 'text'" class="text-h2">
          {{slidecontent[i]}}
        </div>
        <v-img v-else-if="slide === 'image'" :src="slidecontent[i]" alt="Slide image"></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    name: "carouselComp",
    props: {
    slideType: {
      type: Array,
      required: true
    },
    slidecolors: {
      type: Array,
      required: true
    },
    slidecontent: {
      type: String,
      required: true
    }
  },
  // data () {
  //     return {
  //       colors: slidecolors,
  //       slides: slideType,
  //       text: slidecontent
  //     }
  //   },
  
  }
</script>