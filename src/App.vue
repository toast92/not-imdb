<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageLogo from './components/PageLogo.vue';
</script>
<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <page-logo name="Not-IMDB" />
      </RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #6874e8;
  width: 100vw;
  padding: 32px;
}

.logo {
  display: block;
  margin: 0 auto 32px;
}

a {
  color: white;
  text-decoration: none;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 32px 0 0;
  }

  header .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>
