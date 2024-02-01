<template>
  <div v-if="items"> <!-- Add a check here -->
    <v-carousel>
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-card>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script scoped>
export default {
  name:"TextCarousel",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>