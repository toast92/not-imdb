import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTvShowsStore = defineStore('tvShows', () => {
  const tvShowsByGenre = ref({});
  const tvShowDetails = ref({});

  const compareRatings = (firstShow, secondShow) => {
    return secondShow.rating.average - firstShow.rating.average;
  };

  const sortTvShowsByRating = (genre) => {
    if (tvShowsByGenre.value[genre]) {
      return [...tvShowsByGenre.value[genre]].sort(compareRatings);
    }
    return [];
  };

  const getAllGenres = computed(() => {
    return Object.keys(tvShowsByGenre.value);
  });

  const getAllShowsByGenre = (shows) => {
    const genreMap = {};
    shows.forEach(show => {
      show.genres.forEach(genre => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }
        genreMap[genre].push(show);
      });
    });
    tvShowsByGenre.value = genreMap;
    return tvShowsByGenre.value;
  };

  const getTvShows = () => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then(data => getAllShowsByGenre(data))
      .catch((error) => console.error('Error:', error));
  };

  const getTvShowById = (id) => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
    .then(data => tvShowDetails.value = data)
    .catch(error => console.error('Error:', error))
  };

  return {
    tvShowsByGenre,
    tvShowDetails,
    compareRatings,
    sortTvShowsByRating,
    getAllGenres,
    getAllShowsByGenre,
    getTvShows,
    getTvShowById
  };
});
