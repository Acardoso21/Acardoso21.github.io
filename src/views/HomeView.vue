

<template>
  <div class="home">
    <v-row>
      <v-col>

        <v-row class="px-16 ma-0">
          <v-col class="pa-16 ma-0">
           <v-card class="pa-16 ma-auto text-md-h2 text-lg-h1">Some text?</v-card>
          </v-col>
        </v-row>

        <v-divider class="pa-8 ma-8"></v-divider>

        <v-row class="px-8 ma-auto s-px-4">
          <v-col  cols="12" sm="8" data-aos="slide-right" data-aos-duration="500">
              <carouselComp :slide-type=s_Type :slidecolors=s_colors :slidecontent=s_content />
          </v-col>
          <v-col class="fill-height" cols="12" sm="4" data-aos="slide-right" data-aos-duration="500">
            <v-sheet class="align-self-stretch">
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
        </v-row>

        <v-row class="px-8 ma-auto">
          <v-col cols="12" sm="4" data-aos="slide-right" data-aos-duration="500">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4" data-aos="slide-right" data-aos-duration="500">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4" data-aos="slide-right" data-aos-duration="500">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
        </v-row>

        <v-row class="px-8 ma-auto">
          <v-col cols="12" sm="4" data-aos="slide-right" data-aos-duration="500">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="8" data-aos="slide-right" data-aos-duration="500">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
        </v-row>

        <v-row class="px-8 ma-auto">
          <v-col cols="12" sm="4" data-aos="slide-right" data-aos-duration="500">
            <v-sheet>
              <ImgCard :pathprop="require('@/assets/Exampleimg-1.jpg')" titleprop="TITLE" textprop="TEXT" :sizeprop="8" aspect-ratio="1"></ImgCard>            </v-sheet>
          </v-col>
          <v-col cols="12" sm="8" data-aos="slide-right" data-aos-duration="500">
            <v-sheet>
              <ImgCard :pathprop="require('@/assets/ExampleIMG-2.jpg')" titleprop="TITLE" textprop="TEXT" sizeprop="4"></ImgCard>
            </v-sheet>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </div>
</template>

<script>
// @ is an alias to /src
import BasicCard from '@/components/BasicTextCard.vue'
import ImgCard from '@/components/ImgTextCard.vue'
import carouselComp from '@/components/TextCarouselcomp.vue'

export default {
  name: 'HomeView',
  components: {
    BasicCard,
    ImgCard,
    carouselComp
  },data () {
      return {
        s_colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        s_Type: [
          'text',
          'text',
          'text',
          'text',
          'text',
        ],
        s_content:[
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ]
      }
}
}
</script>
