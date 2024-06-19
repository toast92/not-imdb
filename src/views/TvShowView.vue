<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useTvShowsStore } from '@/stores/tvShows';

const route = useRoute();
const showId = route.params.id;
const tvShowStore = useTvShowsStore();

onMounted(() => {
  tvShowStore.getTvShowById(showId);
});

</script>
<template>
  <div class="about">
    <h1>This is a tv show page for tvShow: {{ showId }}</h1>
    <pre> {{ tvShowStore.tvShowDetails }}</pre>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
</style>
