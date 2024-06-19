<script setup>
defineProps({
  genre: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h2>{{ genre }}</h2>
  <div class="carousel">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}

.carousel::-webkit-scrollbar {
  height: 14px;
}

.carousel::-webkit-scrollbar-track {
  background: #162635;
}

.carousel::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 6px;
}

.carousel::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
