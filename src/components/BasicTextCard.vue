<!-- child comp -->
<template>
    <div class="ma-auto pa-auto" data-aos="fade-left" data-aos-duration="750">
    <v-card class="ma-auto pa-auto" :title="titleprop" :subtitle="subtitleprop" :text="textprop" 
    variant="outlined"
    elevation="0"
    >
      <v-card-actions class="ma-auto pa-auto"  >
        <v-spacer/>
        <v-btn variant="outlined">{{btntextprop}}</v-btn>
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
      btntextprop: String
    }
  }
  </script>
  