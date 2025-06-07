<script setup>
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  maxValue: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="relative w-full h-4 bg-white/10 rounded-sm">
    <p class="text-right absolute top-1/2 left-1 -translate-y-1/2 text-sm text-green-500">{{ value }}</p>
    <div class="h-full bg-green-500/20 border border-green-500 rounded-sm" :style="{ width: `${value / maxValue * 100}%` }"></div>
  </div>
</template>