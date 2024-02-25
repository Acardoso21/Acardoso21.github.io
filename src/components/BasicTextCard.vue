child comp
<template>
  <div class="ma-auto pa-auto fill-height" data-aos="fade-left" data-aos-duration="750">
    <v-card v-if="isBackgroundSrcNull()" class="ma-auto pa-auto fill-height"  :title="titleprop" :subtitle="subtitleprop" :text="textprop"
      variant="outlined" elevation="0">
      </v-card>
      <v-card v-else class="ma-auto pa-auto fill-height" variant="outlined" elevation="0">
        <v-img
          :src="backgroundSRC"
          class="align-end"
          cover
        >
        <!-- <v-card class="ma-auto pa-auto fill-height"  :title="titleprop" :subtitle="subtitleprop" :text="textprop"
      variant="outlined" elevation="0"/> -->
        <v-card-title v-text="titleprop"></v-card-title>
        <!-- <v-card-subtitle>{{ subtitleprop }}</v-card-subtitle>
        <v-card-text>{{textprop}}</v-card-text> -->
      </v-img>
    </v-card>
    </div>
</template>
  
<script>
export default {
  src: "dist/aos.js",
  name: 'BasicCard',
  props: {
    titleprop: String,
    subtitleprop: String,
    textprop: String,
    backgroundSRC: {type: String, default: ""},
    },
    methods: {
      isBackgroundSrcNull() {
        return this.backgroundSRC === "";
      }
    }
  };
</script>
  