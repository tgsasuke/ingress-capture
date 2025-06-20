<script setup>
import { ref, computed, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import StatsProgressBar from "@/components/StatsProgressBar.vue";
import { getProfileList } from "@/services/api";

const PLAYERS = ref([]);
const agentData = ref(null);

const minLogs = 0
const maxDisplayPlayers = 50

const sortedMethod = ref('logs')

const sortedPlayers = computed(() => {
  if (sortedMethod.value === 'captures') {
    return PLAYERS.value
      .filter((player) => Number(player.logs) >= minLogs)
      .sort(sortedPlayersByCaptures)
      .slice(0, maxDisplayPlayers)
      .map(mapPlayers)
  } else if (sortedMethod.value === 'logs') {
    return PLAYERS.value
      .filter((player) => Number(player.logs) >= minLogs)
      .sort(sortedPlayersByLogs)
      .slice(0, maxDisplayPlayers)
      .map(mapPlayers)
  } else {
    return PLAYERS.value
  }
});

// 按實際獲得的captures排序
const sortedPlayersByCaptures = (a, b) => {
  const increaseCapturesA = Number(a.captures_end) - Number(a.captures)
  const increaseCapturesB = Number(b.captures_end) - Number(b.captures)
  return increaseCapturesB - increaseCapturesA
}

const sortedPlayersByLogs = (a, b) => {
  const increaseLogsA = Number(a.logs_end) - Number(a.logs)
  const increaseLogsB = Number(b.logs_end) - Number(b.logs)
  return increaseLogsB - increaseLogsA
}

// 計算獲得的captures、ap、logs
const mapPlayers = (player) => {
  player.incRealCaptures = Number(player.captures_end) - Number(player.captures) || 0
  player.incAp = Number(player.ap_end) - Number(player.ap) || 0
  player.incLogs = Number(player.logs_end) - Number(player.logs) || 0
  return player
}

const maxCapturesValue = computed(() => {
  return Math.max(...sortedPlayers.value.map((player) => Number(player.incRealCaptures)));
});

const maxLogsValue = computed(() => {
  return Math.max(...sortedPlayers.value.map((player) => Number(player.incLogs)));
});
// update time 時間距現在多久
const getTimeDistance = (time) => {
  if (!time) return ''

  const now = new Date()
  const updateTime = new Date(time)
  const diffTime = now - updateTime
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffTime / (1000 * 60))

  if (diffDays > 0) {
    return `${diffDays}天前`
  } else if (diffHours > 0) {
    return `${diffHours}小時前`
  } else if (diffMinutes > 0) {
    return `${diffMinutes}分鐘前`
  } else {
    return '剛剛'
  }
}

// async function fetchPlayers() {
//   try {
//     const data = await import('@/assets/agent_data/agent_data.json');
//     agentData.value = data.default;
//     PLAYERS.value = agentData.value;
//   } catch (error) {
//     console.error('Failed to load agent data:', error);
//   }
// }

async function fetchPlayers() {
  try {
    const data = await getProfileList();
    if (data) {
      agentData.value = data
      PLAYERS.value = agentData.value
    }
  } catch (error) {
    console.error('Failed to load agent data:', error);
  }
}

onMounted(() => {
  fetchPlayers();
});
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center max-w-screen-lg mx-auto pt-20">
    <h1 class="text-3xl font-bold pb-4">排行榜</h1>
    <p class="text-sm text-white/80 self-center lg:self-end">* 排行榜將於活動期間不定期更新</p>
    <p v-if="sortedPlayers.length === 0" class="text-sm text-white/80">* 目前無資料</p>
    <table class="w-full max-w-screen-lg overflow-x-auto">
      <thead>
        <tr class="text-left text-white/60">
          <th class="w-16"></th>
          <th class="w-1/3 lg:w-1/6">Agent Name</th>
          <th class="cursor-pointer w-1/3" @click="sortedMethod = 'captures'">Captures Gain
            <FontAwesomeIcon :icon="['fas', 'caret-down']" class="text-white/60" v-if="sortedMethod === 'captures'" />
          </th>
          <th class="cursor-pointer w-1/3" @click="sortedMethod = 'logs'">Logs Gain
            <FontAwesomeIcon :icon="['fas', 'caret-down']" class="text-white/60" v-if="sortedMethod === 'logs'" />
          </th>
          <th class="w-24 text-right whitespace-nowrap">最後更新時間</th>
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
            <StatsProgressBar :value="player.incLogs" :maxValue="maxLogsValue" color="#f97316" />
          </td>
          <td class="text-right w-16 py-2 text-sm">
            <span v-if="player.profile_updated_time">{{ getTimeDistance(player.profile_updated_time) }}</span>
            <span v-else class="text-pink-500">未上傳</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
