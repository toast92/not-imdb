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
      <tv-show-carousel genre="Drama">
        <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Drama')"
        :id="show.id"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </tv-show-carousel>
    <tv-show-carousel genre="Comedy">
        <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Comedy')"
        :id="show.id"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </tv-show-carousel>
    <tv-show-carousel genre="Science-Fiction">
        <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Science-Fiction')"
        :id="show.id"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </tv-show-carousel>
    <tv-show-carousel genre="Fantasy">
        <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Fantasy')"
        :id="show.id"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </tv-show-carousel>
    <tv-show-carousel genre="Sports">
        <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Sports')"
        :id="show.id"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </tv-show-carousel>
  </main>
</template>
