<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const eventStartTime = import.meta.env.VITE_EVENT_START_TIME;
const eventEndTime = import.meta.env.VITE_EVENT_END_TIME;

const countDown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const calculateCountDown = () => {
  const now = new Date();
  const eventStart = new Date(eventStartTime);
  const eventEnd = new Date(eventEndTime);

  if (now < eventStart) {
    const timeDiff = eventStart - now;
    countDown.value.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    countDown.value.hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    countDown.value.minutes = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    countDown.value.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  } else if (now >= eventStart && now < eventEnd) {
    const timeDiff = eventEnd - now;
    countDown.value.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    countDown.value.hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    countDown.value.minutes = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    countDown.value.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  } else {
    countDown.value.days = 0;
    countDown.value.hours = 0;
    countDown.value.minutes = 0;
    countDown.value.seconds = 0;
  }
};

// 判斷活動是否開始
const isEventStarted = computed(() => {
  const now = new Date();
  const eventStart = new Date(eventStartTime);
  return now >= eventStart;
});

// 判斷活動是否結束
const isEventEnded = computed(() => {
  const now = new Date();
  const eventEnd = new Date(eventEndTime);
  return now >= eventEnd;
});

let intervalId;

onMounted(() => {
  calculateCountDown();
  intervalId = setInterval(calculateCountDown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center gap-4">
    <h2 class="text-base font-bold mb-16">
      {{ isEventStarted ? "距離活動結束剩" : "距離活動開始剩" }}{{ isEventEnded ? "活動已結束" : "" }}
    </h2>
    <div class="flex gap-4" v-if="!isEventEnded">
      <div class="flex flex-col items-center justify-center lg:flex-row lg:items-baseline">
        <p class="text-3xl lg:text-6xl font-bold text-purple-500 audiowide-regular">{{ countDown.days }}</p>
        <p class="text-base text-white/80">{{ countDown.days > 1 ? "Days" : "Day" }}</p>
      </div>
      <div class="flex flex-col items-center justify-center lg:flex-row lg:items-baseline">
        <p class="text-3xl lg:text-6xl font-bold text-purple-500 audiowide-regular">{{ countDown.hours }}</p>
        <p class="text-base text-white/80">{{ countDown.hours > 1 ? "Hours" : "Hour" }}</p>
      </div>
      <div class="flex flex-col items-center justify-center lg:flex-row lg:items-baseline">
        <p class="text-3xl lg:text-6xl font-bold text-purple-500 audiowide-regular">{{ countDown.minutes }}</p>
        <p class="text-base text-white/80">{{ countDown.minutes > 1 ? "Minutes" : "Minute" }}</p>
      </div>
      <div class="flex flex-col items-center justify-center lg:flex-row lg:items-baseline">
        <p class="text-3xl lg:text-6xl font-bold text-purple-500 audiowide-regular">{{ countDown.seconds }}</p>
        <p class="text-base text-white/80">{{ countDown.seconds > 1 ? "Seconds" : "Second" }}</p>
      </div>
      
    </div>
  </div>
</template>

<style scoped></style>
