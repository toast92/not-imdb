<script setup>
defineProps({
  genre: {
    type: String,
    default: '',
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
h2 {
  margin: 32px 0 32px 48px;
  font-size: 1.75rem;
}
.carousel {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 32px;
}

.carousel::-webkit-scrollbar {
  height: 12px;
  margin-left: -16px;
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
