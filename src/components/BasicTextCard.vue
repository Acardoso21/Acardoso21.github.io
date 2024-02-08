<!-- child comp -->
<template>
    <div class="ma-auto pa-auto fill-height" data-aos="fade-left" data-aos-duration="750">
    <v-card class="ma-auto pa-auto fill-height" :title="titleprop" :subtitle="subtitleprop" :text="textprop" 
    variant="outlined"
    elevation="0">

      <v-card-actions v-if="hasButton" class="fill-height">
        <v-spacer></v-spacer>
        <v-btn variant="tonal">{{btntextprop}}</v-btn>
      </v-card-actions>
    </v-card>
    </div>
  </template>
  
  <script>
  export default {
    src:"dist/aos.js",
    name: 'BasicCard',
    props:{
      titleprop: String,
      subtitleprop: String,
      textprop: String,
      btntextprop: String,
      hasButton: {
        type: Boolean,
        default: true,
      },
    }
  }
  </script>
  