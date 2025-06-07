<script setup>
import { ref, computed, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import StatsProgressBar from "@/components/StatsProgressBar.vue";


const PLAYERS = ref([]);

const sortedPlayers = computed(() => {
  // logs 大於 10才顯示
  // 顯示前50名
  return PLAYERS.value
    .filter((player) => player.logs > 10)
    .sort((a, b) => b.incRealCaptures - a.incRealCaptures)
    .slice(0, 50);
});

const maxCapturesValue = computed(() => {
  return Math.max(...PLAYERS.value.map((player) => player.incRealCaptures));
});

const maxLogsValue = computed(() => {
  return Math.max(...PLAYERS.value.map((player) => player.incLogs));
});

async function fetchPlayers() {
  const response = await fetch("/src/assets/agent_data/agent_data.json");
  const data = await response.json();
  PLAYERS.value = data.players;
}

onMounted(() => {
  fetchPlayers();
});
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center max-w-screen-lg mx-auto pt-16">
    <h1 class="text-3xl font-bold pb-4">排行榜</h1>
    <p class="text-sm text-white/80 self-end">* 排行榜將於活動期間不定期更新</p>
    <p v-if="sortedPlayers.length === 0" class="text-sm text-white/80">* 目前無資料</p>
    <table class="w-full max-w-screen-lg table-fixed">
      <thead>
        <tr class="text-left">
          <th class="w-16"></th>
          <th class="w-1/3 lg:w-1/6">Agent Name</th>
          <th class="">Captures Gain</th>
          <th class="">Logs Gain</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in sortedPlayers" :key="index"
          :class="{ 'border-b border-white/10': (index + 1) % 5 == 0 }"
          class="hover:bg-white/10 transition-colors duration-300">
          <td class="text-right pr-4 w-16 py-2">
            <FontAwesomeIcon v-if="index === 0" :icon="['fas', 'crown']" class="text-yellow-500" />
            <FontAwesomeIcon v-if="index === 1" :icon="['fas', 'medal']" class="text-gray-500" />
            <FontAwesomeIcon v-if="index === 2" :icon="['fas', 'medal']" class="text-yellow-800" />

            <span :class="{ 'font-bold': index < 3 }"> #{{ index + 1 }}</span>
          </td>
          <td :class="{ 'font-bold': index < 3 }">{{ player.cn }}</td>
          <td class="pe-2">
            <StatsProgressBar :value="player.incRealCaptures" :maxValue="maxCapturesValue" />
          </td>
          <td class="pe-2">
            <StatsProgressBar :value="player.incLogs" :maxValue="maxLogsValue" />
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
