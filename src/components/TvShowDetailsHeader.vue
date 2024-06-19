<script setup>
defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  premiereDate: {
    type: String,
    default: '',
    required: true
  },
  endDate: {
    type: String,
    default: '',
    required: true
  },
  averageRuntime: {
    type: Number,
    default: null,
    required: false
  },
  networkName: {
    type: String,
    default: '',
    required: true
  },
  averageRating: {
    type: Number,
    default: null,
    required: false
  },
  language: {
    type: String,
    default: '',
    required: true
  }
});

const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
</script>

<template>
  <h1>{{ name }}</h1>
  <div class="details-header">
    <div class="details-header__left">
      <p>
        {{ getYear(premiereDate) }} -
        {{ getYear(endDate) }}
        &bull;
      </p>
      <p>
        {{ averageRuntime }} min &bull;
        {{ networkName }}
      </p>
    </div>
    <div class="details-header__right">
      <div>
        <p>Rating</p>
        <p>{{ averageRating }} ⭐</p>
      </div>
      <div>
        <p>Language</p>
        <p>{{ language }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 2.25rem;
}
.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  &__left {
    display: flex;
    p {
      margin: 0 14px 0 0;
    }
  }
  &__right {
    display: flex;
    div {
      margin: 0 0 0 24px;
    }
  }
}
</style>
