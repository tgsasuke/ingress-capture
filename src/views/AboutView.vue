<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const uploadUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_Pu49PUKg-KyzS5KT9f6A0ejlai7ldS8betc-seqtjthayA/viewform?pli=1"
</script>

<template>
  <div class="pt-20 lg:pt-20">
    <h1 class="text-2xl lg:text-3xl font-bold pb-4">
      活動辦法
    </h1>
    <ul class="space-y-2 pb-6">
      <li>📅 活動時間：6/8(日) 00:00 ~ 7/1(二) 02:00</li>
      <li>🎯 挑戰內容：Portal Capture（插白塔），以活動期間內增加的白塔數量作為評比依據。</li>
      <li>📤 參加方式：至指定網站上傳您的探員資訊各一次於挑戰開始與結束時，系統將計算兩次之間的白塔增量。</li>
      <li>🏅 名次與獎勵：取前三名頒發獎品。</li>
    </ul>

    <div class="p-4 bg-white/10 rounded-lg">
      <div class="flex items-center gap-2">
        <FontAwesomeIcon :icon="['fas', 'crown']" class="text-yellow-500"/>
        <p>第一名：老井雙人套餐乙客（價值 NT$2500）</p>
      </div>
      <div class="flex items-center gap-2">
        <FontAwesomeIcon :icon="['fas', 'medal']" class="text-gray-500" />
        <p>第二名：未定</p>
      </div>
      <div class="flex items-center gap-2">
        <FontAwesomeIcon :icon="['fas', 'medal']" class="text-yellow-800" />
        <p>第三名：未定</p>
      </div>
    </div>

    <h2 class="text-2xl lg:text-3xl font-bold pb-4 pt-8">注意事項</h2>
    <ul class="list-disc list-inside">
      <li>初次上傳即視為參賽起點，可重複上傳，系統僅計算首次與最後一次資料的差異。</li>
      <li>活動期間將固定更新一次排行榜，敬請關注。</li>
      <li>得獎者需配合確認探員資訊，以驗證數據真實性。</li>
      <li>上傳網址：<a :href="uploadUrl" target="_blank" class="text-blue-500">Google 表單 - 202506 台中插塔挑戰賽 (可重複上傳)</a></li>
    </ul>
  </div>
</template>

<style>
</style>
