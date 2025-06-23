<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-[80%] mx-auto md:w-full p-4">
    <div class="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-lg w-full">
      <!-- 領取完成 -->
      <div v-if="showSuccess">
        <button
          class="font-bold py-2 px-6 rounded-full inline-flex items-center text-sm"
        >
          <img
            :src="checkImg"
            alt="check"
            class="ml-2 h-20 inline-block align-middle"
          />
        </button>
        <h2 class="text-2xl font-bold mb-4 text-black">領取完成</h2>
        <p class="mb-6 text-gray-700">請使用手機操作，開啟LINE官方帳號查詢</p>
      </div>
      <!-- 手機版 領取完成 -->
      <div v-if="showMobileSuccess">
        <button
          class="font-bold py-2 px-6 rounded-full inline-flex items-center text-sm"
        >
          <img
            :src="checkImg"
            alt="check"
            class="ml-2 h-20 inline-block align-middle"
          />
        </button>
        <h2 class="text-2xl font-bold mb-4 text-black">領取完成</h2>
        <router-link to="/" class="flex justify-center w-[140px] mx-auto bg-[#00B8DB] text-white px-6 py-2 rounded-full font-bold mb-4">開啟票匣</router-link>
        <p class="mb-6 text-gray-700">請至LINE官方帳號開啟票匣查詢</p>
      </div>
      <!-- 票券已被領取 -->
      <div v-if="showAlreadyClaimed">
        <button
          class="font-bold py-2 px-6 rounded-full inline-flex items-center text-sm"
        >
          <img
            :src="alert"
            alt="check"
            class="ml-2 h-20 inline-block align-middle"
          />
        </button>
        <h2 class="text-2xl font-bold mb-4 text-black">票券已被領取</h2>
        <p class="mb-6 text-gray-700">此票券已被領取，無法重複領取</p>
        <router-link to="/" class="flex justify-center w-[140px] mx-auto bg-[#00B8DB] text-white px-6 py-2 rounded-full font-bold mb-4">返回首頁</router-link>
        <p class="text-sm mb-6 text-gray-700">＊請至LINE官方帳號開啟票匣查詢</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import checkImg from '@/assets/img/Frame_138653.png';
import alert from '@/assets/img/Error.png';

const showSuccess = ref(false); 
const showMobileSuccess = ref(false); 
const showAlreadyClaimed = ref(true); 

</script>

<router-view /> 