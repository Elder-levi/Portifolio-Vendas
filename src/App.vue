<script setup>
import {RouterView } from 'vue-router'
import Navbar from './components/Nav/NavCabeçalho.vue'
import AppFooter from './components/Main/Footer/AppFooter.vue';
</script>

<template>
  <Navbar></Navbar >
  <main class="container">

    <RouterView />

  </main>
  <AppFooter></AppFooter>
</template>

<style scoped>

main {
  padding-top: 0;
  margin: 0 auto;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
