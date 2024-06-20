<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: '',
    required: true
  },
  summary: {
    type: String,
    default: '',
    required: true
  },
  genres: {
    type: Array,
    default: () => [],
    required: true
  }
});
</script>

<template>
  <div class="card">
    <div>
      <img class="card__image" :src="imageSrc" />
    </div>

    <div class="card__text">
      <div v-html="summary"></div>
      <p>Genres:</p>
      <ul>
        <li v-for="genre in genres" :key="genre">{{ genre }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  
  &__image {
    max-height: 500px;
  }
  &__text {
    p {
      padding-top: 20px;
    }
    ul {
      list-style-type: none;
      display: flex;
      padding: 0;
      li {
        margin: 10px 10px 0 0;
      }
    }
  }
}

@media (min-width: 1024px) {
  .card {
    display: flex;
    &__text {
      margin: 0 30px;
    }
  }
}
</style>
