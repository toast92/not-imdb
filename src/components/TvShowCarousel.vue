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
    }
</style>
