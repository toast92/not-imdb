<script setup>
import { useTvShowsStore } from '@/stores/tvShows';
import { onMounted, ref, computed } from 'vue';
import TvShowCard from '@/components/TvShowCard.vue';
import TvShowCarousel from '@/components/TvShowCarousel.vue';
import SearchBar from '@/components/SearchBar.vue';

const tvShowStore = useTvShowsStore();
const searchQuery = ref('');

onMounted(() => {
  if (Object.keys(tvShowStore.tvShowsByGenre).length === 0) {
    tvShowStore.getTvShows();
  }
});

const handleSearch = (query) => {
  searchQuery.value = query;
};

const filteredShows = computed(() => {
  if (!searchQuery.value) {
    return tvShowStore.tvShows;
  }
  return tvShowStore.tvShows.filter((show) =>
    show.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <main>
    <search-bar @search="handleSearch" />
    <div v-show="!searchQuery">
      <tv-show-carousel v-for="genre in tvShowStore.getAllGenres" :key="genre" :genre="genre">
        <tv-show-card
          v-for="show in tvShowStore.sortTvShowsByRating(genre)"
          :id="show.id"
          :key="show.id"
          :name="show.name"
          :rating="show.rating.average"
          :imageSrc="show.image.medium"
        ></tv-show-card>
      </tv-show-carousel>
    </div>
    <div v-if="searchQuery" class="search-results">
      <tv-show-card
        v-for="show in filteredShows"
        :id="show.id"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </div>
  </main>
</template>

<style scoped lang="scss">
.search-results {
  display: flex;
  flex-wrap: wrap;
}
</style>
