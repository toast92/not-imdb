<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import { useTvShowsStore } from '@/stores/tvShows';

const route = useRoute();
const showId = route.params.id;
const tvShowStore = useTvShowsStore();

const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

onMounted(() => {
  tvShowStore.getTvShowById(showId);
});
</script>
<template>
  <div class="about">
    <h1>This is a tv show page for tvShow: {{ showId }}</h1>
    <h2>{{ tvShowStore.tvShowDetails.name }}</h2>
    <p>{{ tvShowStore.tvShowDetails.averageRuntime }} mins</p>
    <img class="show__image" :src="tvShowStore.tvShowDetails.image?.original" />
    <div v-html="tvShowStore.tvShowDetails.summary"></div>
    <div>
      {{ getYear(tvShowStore.tvShowDetails.premiered) }} -
      {{ getYear(tvShowStore.tvShowDetails.ended) }}
    </div>
    <p>{{ tvShowStore.tvShowDetails.status }}</p>
    <p>{{ tvShowStore.tvShowDetails.rating?.average }}</p>
    <p>{{ tvShowStore.tvShowDetails.language }}</p>
    <ul>
      <li v-for="genre in tvShowStore.tvShowDetails.genres" :key="genre">{{ genre }}</li>
    </ul>
  </div>
</template>

<style>
.show__image {
  max-height: 500px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
