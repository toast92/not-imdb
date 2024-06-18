<script setup>
import { useTvShowsStore } from '@/stores/tvShows';

const tvShowStore = useTvShowsStore();
tvShowStore.getTvShows();
</script>

<template>
  <main>
    <h3>List of tv-shows by genre ordered by rating</h3>
    <h4>Drama:</h4>
    <ul>
      <li v-for="show in tvShowStore.getTvShowsByGenre('Drama')" :key="show.id">{{ show }}</li>
    </ul>
    <h4>Comedy:</h4>
    <ul>
      <li v-for="show in tvShowStore.getTvShowsByGenre('Comedy')" :key="show.id">{{ show }}</li>
    </ul>
    <h4>Science-fiction:</h4>
    <ul>
      <li v-for="show in tvShowStore.getTvShowsByGenre('Science-Fiction')" :key="show.id">
        {{ show }}
      </li>
    </ul>
    <h4>Fantasy:</h4>
    <ul>
      <li v-for="show in tvShowStore.getTvShowsByGenre('Fantasy')" :key="show.id">{{ show }}</li>
    </ul>
    <h4>Thriller:</h4>
    <ul>
      <li v-for="show in tvShowStore.getTvShowsByGenre('Thriller')" :key="show.id">{{ show }}</li>
    </ul>
    <h4>Mystery:</h4>
    <ul>
      <li v-for="show in tvShowStore.getTvShowsByGenre('Mystery')" :key="show.id">{{ show }}</li>
    </ul>
    <h4>Sports:</h4>
    <ul>
      <li v-for="show in tvShowStore.getTvShowsByGenre('Sports')" :key="show.id">{{ show }}</li>
    </ul>
  </main>
</template>
