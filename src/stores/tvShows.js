import { defineStore } from 'pinia';

export const useTvShowsStore = defineStore('tvShows', {
  state: () => ({
    tvShows: []
  }),

  getters: {
    getTvShowsByGenre: (state) => {
      return (genre) => state.tvShows.filter((tvShow) => tvShow.genres.includes(genre));
    }
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    getTvShows() {
      fetch('https://api.tvmaze.com/shows')
        .then((response) => response.json())
        .then((data) => (this.tvShows = data))
        .catch((error) => console.error('Error:', error));
    }
  }
});
