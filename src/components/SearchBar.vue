<script setup>
import { ref } from 'vue';
const searchQuery = ref('');

const emit = defineEmits(['search']);

const onInput = () => {
  emit('search', searchQuery.value);
};
</script>

<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" @input="onInput" placeholder="Search TV Shows" />
  </div>
</template>

<style scoped lang="scss">
.search-bar input {
  display: flex;
  margin: 32px auto;
  border-radius: 10px;
  width: 300px;
  padding: 9px;
  font-size: 16px;
  border: none;
  font-family: 'Poppins', sans-serif;
  background-color: rgba(255, 255, 255, 0.85);
  &:focus-visible {
    outline: none;
  }
}
</style>
