<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="logo">
    <h1>{{ name }}</h1>
  </div>
</template>

<style scoped>
.logo {
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  font-weight: 700;
  background-color: var(--text-color);
  color: var(--secondary-color);
  width: 200px;
}
</style>
