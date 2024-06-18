<script setup>
defineProps({
  id: {
    type: Number,
    required: true
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
  <router-link :to="{ name: 'show', params: { id: id } }">
    <div class="card">
      <h3 class="card__title">{{ name }}</h3>
      <img :src="imageSrc" />
      <span>{{ rating }} ⭐</span>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.card {
  margin: 0 20px;
}

a {
  color: #fbf5f3;
  text-decoration: none;
}
</style>
