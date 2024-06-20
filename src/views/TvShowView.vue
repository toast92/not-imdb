<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import { useTvShowsStore } from '@/stores/tvShows';
import TvShowDetailsCard from '@/components/TvShowImageTextCard.vue';
import TvShowDetailsHeader from '@/components/TvShowDetailsHeader.vue';

const route = useRoute();
const showId = route.params.id;
const tvShowStore = useTvShowsStore();

onMounted(() => {
  tvShowStore.getTvShowById(showId);
});
</script>
<template>
  <section class="show-details">
    <RouterLink to="/">&lt; Back</RouterLink>
    <tv-show-details-header
      :name="tvShowStore.tvShowDetails.name"
      :premiereDate="tvShowStore.tvShowDetails.premiered"
      :endDate="tvShowStore.tvShowDetails.ended"
      :averageRuntime="tvShowStore.tvShowDetails.averageRuntime"
      :networkName="tvShowStore.tvShowDetails.network?.name"
      :averageRating="tvShowStore.tvShowDetails.rating?.average"
      :language="tvShowStore.tvShowDetails.language"
    >
    </tv-show-details-header>
    <tv-show-details-card
      :imageSrc="tvShowStore.tvShowDetails?.image?.original"
      :summary="tvShowStore.tvShowDetails.summary"
      :genres="tvShowStore.tvShowDetails.genres"
    ></tv-show-details-card>
  </section>
</template>

<style scoped lang="scss">
.show-details {
  max-width: 100%;
  background-color: #162635;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 32px;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media (min-width: 1024px) {
  .show-details {
    max-width: 1280px;
  }
}
</style>
