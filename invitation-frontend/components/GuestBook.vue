<template>
  <div class="guestbook-container mx-auto p-4">
    <div class="flex justify-between items-center mb-3">
      <!-- 작성하기 버튼과 동일한 공간을 차지하면서 사용자에게는 보이지 않도록 opacity-0 설정 -->
      <button class="opacity-0 text-sm bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">글 남기기</button>
      <h2 class="title">방명록</h2>
      <button class="text-sm bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="toggleModal">글 남기기</button>
    </div>
    <div v-if="isLoading" class="text-center">로딩 중...</div>
    <!-- <div v-else class="grid grid-cols-1 sm:grid-cols-3 gap-4"> -->
    <div v-else class="guestbooks-container overflow-x-auto flex w-full space-x-3 h-64 py-4 relative">
      <GuestBookDetail
        v-for="book in guestBooks"
        :key="book.id"
        :book="book"
      />
    </div>
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
const guestBooks = ref<GuestBook[]>()
const isLoading = useState<Boolean>("isLoading", () => true);

onMounted(() => {
  const API_URL = import.meta.env.VITE_API_URL;

  axios
    .get(API_URL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        apikey: import.meta.env.VITE_API_KEY,
      },
    })
    .then((res) => {
      guestBooks.value = res.data;
    }).then(() => { isLoading.value = false; })
    .catch((err) => {
      console.log("err = ", err);
      isLoading.value = false;
    });
});

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
