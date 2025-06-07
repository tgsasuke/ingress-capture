<script setup>
import EventCountdown from '../components/EventCountdown.vue'
</script>

<template>
  <div>
    <div class="relative">
      <img src="../assets/hero_image.png" alt="ingress-logo" class="w-full mb-16" />

      <div class="lg:bg-black/80 absolute lg:-bottom-16 left-1/2 -translate-x-1/2 w-full lg:w-4/5 flex flex-col justify-center items-center py-4 gap-4">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-2xl lg:text-4xl font-bold audiowide-regular text-green-500 text-center">INGRESS ENLIGHTEND</h1>
          <p class="text-2xl lg:text-4xl font-bold"><span class="audiowide-regular  text-green-500">6</span>月 <span class="audiowide-regular text-green-500">CAPTURE</span> 挑戰賽</p>
        </div>
        <EventCountdown />
      </div>
    </div>
 

  </div>
</template>
