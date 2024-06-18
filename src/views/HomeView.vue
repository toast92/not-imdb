<script setup>
import { useTvShowsStore } from '@/stores/tvShows';
import TvShowCard from '@/components/TvShowCard.vue';
import TvShowCarousel from '@/components/TvShowCarousel.vue';

const tvShowStore = useTvShowsStore();
tvShowStore.getTvShows();
</script>

<template>
  <main>
    <h3>List of tv-shows by genre ordered by rating</h3>
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
  </main>
</template>
