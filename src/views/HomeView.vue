<script setup>
import { useTvShowsStore } from '@/stores/tvShows';
import TvShowCard from '@/components/TvShowCard.vue';

const tvShowStore = useTvShowsStore();
tvShowStore.getTvShows();
</script>

<template>
  <main>
    <h3>List of tv-shows by genre ordered by rating</h3>
    <h4>Drama:</h4>
    <ul>
      <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Drama')"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </ul>
    <h4>Comedy:</h4>
    <ul>
      <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Comedy')"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </ul>
    <h4>Science-fiction:</h4>
    <ul>
      <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Science-Fiction')"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </ul>
    <h4>Fantasy:</h4>
    <ul>
      <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Science-Fiction')"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </ul>
    <h4>Sports:</h4>
    <ul>
      <tv-show-card
        v-for="show in tvShowStore.sortTvShowsByRating('Sports')"
        :key="show.id"
        :name="show.name"
        :rating="show.rating.average"
        :imageSrc="show.image.medium"
      ></tv-show-card>
    </ul>
  </main>
</template>
