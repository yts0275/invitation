<template>
  <div class="mx-auto p-4">
    <h1 class="text-3xl font-bold mb-8">방명록</h1>
    <div v-if="isLoading" class="text-center">로딩 중...</div>
    <!-- <div v-else class="grid grid-cols-1 sm:grid-cols-3 gap-4"> -->
    <div v-else>
      <Swiper
        :slides-per-view="3"
        :loop="true"
      >
      <SwiperSlide v-for="book in guestBooks" :key="book.id">
        <GuestBookDetail :book="book"/>
        <!-- <p class="text-red-500">{{ book.id }}</p>
        <p class="text-red-500">{{ book.name }}</p>
        <p class="text-red-500">{{ book.content }}</p> -->
      </SwiperSlide>
    </Swiper>
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

<style scoped></style>
