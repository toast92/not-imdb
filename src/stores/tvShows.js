import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTvShowsStore = defineStore('tvShows', () => {
  const tvShowsByGenre = ref({});
  const tvShows = ref([]);
  const tvShowDetails = ref({});

  const getAllGenres = computed(() => {
    return Object.keys(tvShowsByGenre.value);
  });

  const compareRatings = (firstShow, secondShow) => {
    return secondShow.rating.average - firstShow.rating.average;
  };

  const sortTvShowsByRating = (genre) => {
    if (tvShowsByGenre.value[genre]) {
      return [...tvShowsByGenre.value[genre]].sort(compareRatings);
    }
    return [];
  };

  const getAllShowsByGenre = (shows) => {
    const genreMap = {};
    shows.forEach((show) => {
      show.genres.forEach((genre) => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }
        genreMap[genre].push(show);
      });
    });
    tvShowsByGenre.value = genreMap;
    return tvShowsByGenre.value;
  };

  const resetTvShowState = () => {
    return (tvShowDetails.value = {});
  };

  const getTvShows = () => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => (tvShows.value = data))
      .then((data) => getAllShowsByGenre(data))
      .catch((error) => console.error('Error:', error));
  };

  const getTvShowById = (id) => {
    resetTvShowState();
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => (tvShowDetails.value = data))
      .catch((error) => console.error('Error:', error));
  };

  return {
    tvShowsByGenre,
    tvShowDetails,
    getAllGenres,
    tvShows,
    compareRatings,
    sortTvShowsByRating,
    getAllShowsByGenre,
    getTvShows,
    getTvShowById
  };
});
