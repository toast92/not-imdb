<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
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
  <router-link :to="{ name: 'show', params: { id: id }}">
    <div class="tv-show-card">
      <h4>{{ name }}</h4>
      <img :src="imageSrc" />
      <span>{{ rating }}</span>
    </div>
  </router-link>
</template>

<style scoped>
</style>
