<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 bg-gray-500 bg-opacity-25 flex justify-center items-center z-50 p-4"
  >
    <div
      class="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-[555px] w-full relative max-h-[90vh]"
    >
      <button
        @click="closeModal"
        class="absolute top-4 right-5 text-gray-400 z-20"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="overflow-y-auto" style="max-height:70vh;">
        <div class="text-center mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-gray-800">
            VIP會員專屬取票流程
          </h2>
          <p class="text-gray-500 mt-2 text-sm md:text-base">
            請依序完成以下步驟，即可成功領取您的專屬票券
          </p>
        </div>

        <div
          class="flex items-start justify-center mb-2 max-w-[200px] md:max-w-[300px] mx-auto"
        >
          <div class="flex flex-col items-center text-center gap-1">
            <div
              :class="
                lineBound
                  ? 'bg-[#00B8DB] text-white'
                  : 'bg-gray-200 text-gray-500'
              "
              class="rounded-full h-8 w-8 flex items-center justify-center text-sm"
            >
              1
            </div>
            <span
              :class="lineBound ? 'text-[#00B8DB]' : 'text-gray-500'"
              class="text-xs md:text-sm"
            >
              綁定LINE<br>帳號
            </span>
          </div>
          <div class="flex-1 h-0.5 bg-gray-200 mt-4 mx-2 md:mx-4"></div>
          <div class="flex flex-col items-center text-center gap-1">
            <div
              :class="
                officialAccountJoined
                  ? 'bg-[#00B8DB] text-white'
                  : 'bg-gray-200 text-gray-500'
              "
              class="rounded-full h-8 w-8 flex items-center justify-center text-sm"
            >
              2
            </div>
            <span
              :class="officialAccountJoined ? 'text-[#00B8DB]' : 'text-gray-500'"
              class="text-xs md:text-sm"
            >
              加入LINE<br />官方帳號
            </span>
          </div>
        </div>

        <div class="space-y-3">
          <div class="bg-[#00B8DB33] rounded-lg p-4 md:px-6 md:py-4">
            <h3 class="font-bold text-base md:text-lg text-gray-800 mb-2">
              步驟一：綁定LINE登入
            </h3>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              請點擊下方按鈕綁定您的
              Line，確保順利接收票券通知及未來的專屬優惠資訊
            </p>
            <button
              @click="toggleLineBinding"
              :class="
                lineBound
                  ? 'bg-white text-[#10B981] border border-[#10B981] cursor-not-allowed gap-2'
                  : 'bg-[#00B8DB] hover:bg-teal-600 text-white'
              "
              class="font-bold py-2 px-6 rounded-full inline-flex items-center text-sm"
            >
              {{ lineBound ? "已綁定" : "立即綁定" }}
              <img
                v-if="lineBound"
                :src="checkImg"
                alt="check"
                class="ml-2 h-5 inline-block align-middle"
              />
            </button>
          </div>

          <div
            :class="!lineBound ? 'bg-gray-100' : 'bg-[#00B8DB33]'"
            class="rounded-lg p-4 md:px-6 md:py-4"
          >
            <h3 class="font-bold text-base md:text-lg text-gray-800 mb-2">
              步驟二：加入LINE官方帳號，直接領取票券
            </h3>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              加入我們的 Line
              官方帳號以獲得領票連結並綁定專屬渠道！加入後系統將自動確認您的狀態
            </p>
            <button
              @click="toggleOfficialAccount"
              :disabled="!lineBound"
              :class="
                officialAccountJoined
                  ? 'bg-white text-[#10B981] border border-[#10B981] cursor-not-allowed gap-2'
                  : !lineBound
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#00B8DB] hover:bg-teal-600 text-white'
              "
              class="font-bold py-2 px-6 rounded-full inline-flex items-center text-sm"
            >
              {{ officialAccountJoined ? "已加入" : "立即加入" }}
              <img
                v-if="officialAccountJoined"
                :src="checkImg"
                alt="check"
                class="ml-2 h-5 inline-block align-middle"
              />
            </button>
          </div>
        </div>

        <div class="mt-6 md:mt-8 text-xs md:text-sm text-gray-500">
          <ol class="list-decimal list-outside pl-5 sm:pl-6 space-y-1">
            <li>票券將於您完成上述步驟後自動發送，請耐心等候</li>
            <li>
              綁定與領票流程進行中，請勿關閉視窗或返回上一頁，以免影響領取成功或資料遺失。
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { useRouter } from 'vue-router';
import checkImg from "@/assets/img/Frame_138653.png";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const closeModal = () => {
  emit("update:modelValue", false);
};

const lineBound = ref(false);
const officialAccountJoined = ref(false);

const router = useRouter();

const toggleLineBinding = () => {
  lineBound.value = !lineBound.value;
};

const toggleOfficialAccount = () => {
  if (lineBound.value) {
    if (!officialAccountJoined.value) {
      officialAccountJoined.value = true;
      router.push('/success');
    }
  }
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.overflow-y-auto {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
