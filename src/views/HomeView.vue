

<template>
  <div class="home">
    <v-row>
      <v-col>

        <v-row>
          <v-col class="pa-auto ma-auto">
            <v-img :src="require('../assets/NAME-page-xs.jpg')"></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="8">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
          <!-- <v-col cols="12" sm="4">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col> -->
          <v-col cols="12" sm="4">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="4">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="8">
            <v-sheet>
              <BasicCard titleprop=Motivations subtitleprop="bab" textprop="ds" btntextprop="f" />
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

export default {
  name: 'HomeView',
  components: {
    BasicCard
  }
}
</script>
