import { defineStore } from 'pinia';

export const useTvShowsStore = defineStore('tvShows', {
  state: () => ({
    tvShows: []
  }),

  getters: {
    getTvShowsByGenre: (state) => {
      return (genre) => state.tvShows.filter((tvShow) => tvShow.genres.includes(genre));
    },

    compareRatings: () => {
      return (firstShow, secondShow) => secondShow.rating.average - firstShow.rating.average;
    },

    sortTvShowsByRating: (getters) => {
      return (genre) => getters.getTvShowsByGenre(genre).sort(getters.compareRatings);
    }
  },
  actions: {
    getTvShows() {
      fetch('https://api.tvmaze.com/shows')
        .then((response) => response.json())
        .then((data) => (this.tvShows = data))
        .catch((error) => console.error('Error:', error));
    }
  }
});
