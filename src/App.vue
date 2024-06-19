<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageLogo from './components/PageLogo.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <page-logo name="Not-IMDB" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #6874e8;
  width: 100vw;
}

.logo {
  display: block;
  margin: 0 auto 32px;
}

nav {
  width: 100%;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 32px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 16px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 32px 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -16px;
    font-size: 1rem;

    padding: 16px 0;
    margin-top: 16px;
  }
}
</style>
