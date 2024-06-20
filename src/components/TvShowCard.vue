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
    required: false
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
      <img :src="imageSrc" loading="lazy" />
      <h3 class="card__title">{{ name }}</h3>
      <span>{{ rating }} ⭐</span>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  padding: 12px 0 0 0;
  margin-bottom: 16px;
  &:hover {
    background-color: #162635;
  }
}
.card {
  margin: 0 20px;
}

a {
  color: #fbf5f3;
  text-decoration: none;
}
</style>
