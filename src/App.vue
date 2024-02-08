<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <nav>
    <v-row class="ma-4" rounded="0" elevation="25">

      <v-col center align-self="center">
        <router-link to="/">
          <v-img aspect-ratio="1" contain="true" max-height="100" src="@/assets/logo.png" :key="this.darkMode" class="ma-auto"></v-img>
        </router-link>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col center class="pa-4 ma-auto">
        <v-btn class="mx-5" to="/contact">Contact</v-btn>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col center class="pa-4 ma-auto">
        <v-btn size="x-large" icon="mdi-theme-light-dark" @click="toggleTheme">
        </v-btn>
      </v-col>
    </v-row>

  </nav>
  <router-view />

</template>

<script>

export default {
  methods: {
    toggleDarkMode: function () {
      this.$vuetify.theme.light = !this.$vuetify.theme.light;
      this.darkMode = !this.darkMode;
    },
  },
  computed: {
    switchLabel: function () {
      return this.darkMode ? 'dark' : 'light';
    },
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
