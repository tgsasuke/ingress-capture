<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import RankingView from "./views/RankingView.vue";
import UploadView from "./views/UploadView.vue";
</script>

<template>
  <div
    class="relative w-full flex flex-col items-center justify-center pb-24"
  >
    <nav class="fixed top-0 w-full backdrop-blur-sm z-50" :class="{ 'bg-black/50': $route.path === '/' }">
      <ul class="flex justify-center gap-4 h-16 items-center">
        <RouterLink to="/" class="px-4 text-center">首頁</RouterLink>
        <RouterLink to="/about" class="px-4 text-center">活動辦法</RouterLink>
        <RouterLink to="/ranking" class="px-4 text-center">排行榜</RouterLink>
      </ul>
    </nav>
    <RouterView />

    
  </div>
</template>

<style lang="scss" scoped>
$color-text: #00ff00;
nav a.router-link-exact-active {
  border-bottom: 2px solid $color-text;
  color: $color-text;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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
</style> -->
