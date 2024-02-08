<!-- child comp -->
<script setup>
// let colw = sizeprop*2
</script>

<template>
  <div>
    <v-card min-height="300" variant="outlined" elevation="0">
      <v-row no-gutters>
        <v-col cols="12" sm="6" >
            <v-img  :src="pathprop" height="300" :width="300 * sizeprop" :aspect-ratio="ratioprop" cover></v-img>
        </v-col>
        <v-col cols="6">
          <v-sheet class="pa-2 ma-2">
            <v-card-title class="text-h4" text-weight="10">{{titleprop}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="ma-auto pa-auto">{{ textprop }}</v-card-text>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "ImgCard",
  props: {
    titleprop: String,
    textprop: String,
    pathprop: String,
    sizeprop: Number,
    ratioprop: { type: String, default: "1" }
  },
};
</script>
