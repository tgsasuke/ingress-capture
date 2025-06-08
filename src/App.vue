<script setup>
import { ref } from "vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import RankingView from "./views/RankingView.vue";

const currentPage = ref('home')
</script>

<template>
  <div
    class="relative w-full flex flex-col items-center justify-center pb-24"
  >
    <!-- <nav class="fixed top-0 w-full backdrop-blur-sm z-50" :class="{ 'bg-black/50': $route.path === '/' }">
      <ul class="flex justify-center gap-4 h-16 items-center">
        <RouterLink to="/" class="px-4 text-center">首頁</RouterLink>
        <RouterLink to="/about" class="px-4 text-center">活動辦法</RouterLink>
        <RouterLink to="/ranking" class="px-4 text-center">排行榜</RouterLink>
      </ul>
    </nav>

    <RouterView /> -->
    
    <nav class="fixed top-0 w-full backdrop-blur-sm z-50" :class="{ 'bg-black/50': currentPage === 'home' }">
      <ul class="flex justify-center gap-4 h-16 items-center">
        <li>
          <label class="cursor-pointer px-4 py-2 rounded-sm hover:bg-green-500/20 has-checked:text-green-500">
            <input type="radio" name="page" value="home" v-model="currentPage" class="appearance-none" />
            <span>首頁</span>
          </label>
        </li>
        <li>
          <label class="cursor-pointer px-4 py-2 rounded-sm hover:bg-green-500/20 has-checked:text-green-500">
            <input type="radio" name="page" value="about" v-model="currentPage" class="appearance-none" />
            <span>活動辦法</span>
          </label>
        </li>
        <li>
          <label class="cursor-pointer px-4 py-2 rounded-sm hover:bg-green-500/20 has-checked:text-green-500">
            <input type="radio" name="page" value="ranking" v-model="currentPage" class="appearance-none" />
            <span>排行榜</span>
          </label>
        </li>
      </ul>
    </nav>
    
    <HomeView id="home" v-if="currentPage === 'home'" />
    <AboutView id="about" v-if="currentPage === 'about'" />
    <RankingView id="ranking" v-if="currentPage === 'ranking'" />
  </div>
</template>

<style lang="scss" scoped>
$color-text: #00ff00;
nav a.router-link-exact-active {
  border-bottom: 2px solid $color-text;
  color: $color-text;
}
</style>