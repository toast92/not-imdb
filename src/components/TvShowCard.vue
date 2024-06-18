<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="tv-show-card">
    <h1>{{ name }}</h1>
    <img :src="imageSrc" />
    <span>{{ rating }}</span>
  </div>
</template>

<style scoped>
</style>
