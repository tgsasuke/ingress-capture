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
  color: {
    type: String,
    default: '#22c55e',
  },
});
</script>

<template>
  <div class="relative w-full h-4 bg-white/10 rounded-sm">
    <p class="text-right absolute top-1/2 left-1 -translate-y-1/2 text-sm" :style="{ color: props.color }">{{ value }}
    </p>
    <div class="h-full border rounded-sm" :style="{
      width: `${maxValue > 0 ? value / maxValue * 100 : 0}%`,
      backgroundColor: props.color + '20',
      borderColor: props.color
    }">
    </div>
  </div>
</template>