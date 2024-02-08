<template>
  <nav>
    <v-row class="ma-4" rounded="0" elevation="25">
      <v-col center class="pa-4 ma-auto" >
        <v-btn ref="myButton" to="/"> <v-icon start icon="mdi-home-outline"/> Home</v-btn>
      </v-col>
      <v-divider vertical></v-divider>

      <v-col center align-self="center">
        <v-img aspect-ratio="1" contain="true" max-height="100" :src="require('@/assets/logo-nobg.png')" class="ma-auto"></v-img>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col center class="pa-4 ma-auto">
      <v-btn   class="mx-5" to="/contact">Contact</v-btn>
      </v-col>

  </v-row>

  </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      btnHeight: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const btnElement = this.$refs.myButton.$el;
      this.btnWidth = btnElement.offsetWidth + 'px';
    });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* nav {
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
