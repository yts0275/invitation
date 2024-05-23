<template>
  <div class="guestbook-container mx-auto p-4 sm:w-[60%]">
    <div class="flex justify-between items-center mb-3">
      <!-- 작성하기 버튼과 동일한 공간을 차지하면서 사용자에게는 보이지 않도록 opacity-0 설정 -->
      <button class="opacity-0 text-sm bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">글 남기기</button>
      <h2 class="title">방명록</h2>
      <button class="text-sm bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="toggleModal">글 남기기</button>
    </div>
    <div v-if="isLoading" class="text-center">로딩 중...</div>
    <!-- <div v-else class="grid grid-cols-1 sm:grid-cols-3 gap-4"> -->
    <div v-else>
      <div v-if="isEmpty" class="mt-10 text-center text-gray-500 text-xl">
        아직 방명록이 없습니다. 첫 번째 메시지를 남겨주세요 !!
      </div>
      <div v-else class="guestbooks-container overflow-x-auto flex w-full space-x-3 h-64 py-4 relative">
        <GuestBookDetail
          v-for="book in guestBooks"
          :key="book.id"
          :book="book"
        />
      </div>
    </div>

    <GuestBookCreateModal v-if="isModalOpen" @close="toggleModal" :lastPk="lastPk" @getData="getData"/>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import GuestBookDetail from "@/components/GuestBookDetail.vue";

type GuestBook = {
  id: number;
  name: string;
  content: string;
  created_at: Date;
  updated_at: Date;
};

// const guestBooks = useState<GuestBook[]>("guestBooks", () => []);
const guestBooks = ref<GuestBook[]>([])
const isLoading = useState<Boolean>("isLoading", () => true);
const isModalOpen = ref<boolean>(false);
const lastPk = ref<number | null>(null);

const isEmpty = computed(() => {
  return guestBooks.value.length === 0
})

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
}

onMounted(() => {
  getData()
});

const getData = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  axios
    .get(API_URL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        apikey: import.meta.env.VITE_API_KEY,
      },
    })
    .then((res) => {
      if(res.data.length === 0) {
        lastPk.value = 1
      } else {
        lastPk.value = res.data[res.data.length - 1].id;
        guestBooks.value = res.data.reverse()
      }
    }).then(() => { isLoading.value = false; })
    .catch((err) => {
      console.log("err = ", err);
      isLoading.value = false;
    });
}



</script>

<style scoped>
.guestbook-container {
  margin-bottom: 100px;
}

.guestbooks-container::-webkit-scrollbar {
    height: 0.65rem;
}

.guestbooks-container::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
  background: #ccc;
  cursor: pointer;
  height: 10px;
}
</style>
