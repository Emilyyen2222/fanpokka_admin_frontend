<script setup lang="ts">
import { ref } from 'vue';
import VipModal from './VipModal.vue';

const isModalOpen = ref(true); 

const openModal = () => {
  isModalOpen.value = true;
};
</script>

<template>
  <div class="h-screen w-full flex justify-center items-center bg-gray-100 p-10">
    <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">Fanpokka Admin Frontend</h1>
        <button @click="openModal" class="px-6 py-3 bg-[#00B8DB] text-white font-bold rounded-lg shadow-md transition-colors">
        打開彈窗
        </button>
    </div>
  </div>
  <VipModal v-model="isModalOpen" />
</template> 