<template>
  <div class="pb-10">
    <div class="mx-auto max-w-3xl">
      <h2 class="py-5 title">사진첩</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-10">
        <div v-for="(picture, index) in pictures" :key="index" class="relative pb-[75%] overflow-hidden group" @click="openModal(picture)">
          <img :src="picture" :alt="'Picture ' + (index + 1)" class="absolute top-0 left-0 w-full h-full object-cover" />
          <div class="absolute top-0 left-0 w-full h-full bg-gray-100 opacity-10 group-hover:opacity-50 transition-opacity hover:cursor-pointer"></div>
        </div>
      </div>
    </div>
    
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click="closeModal">
      <div class="bg-white p-4 rounded max-h-[90vh] overflow-auto relative mx-5" @click.stop>
        <button class="absolute top-2 right-2 text-gray-500" @click="closeModal">Close</button>
        <img :src="selectedPicture" alt="Selected Picture" class="max-w-full max-h-[70vh]" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const pictureCount = 8; // 총 이미지 수
const pictures = ref<string[]>(Array.from({ length: pictureCount }, (_, i) => `/invitation/image/picture${i + 1}.jpg`));

const showModal = ref<boolean>(false);
const selectedPicture = ref<string>('');
const openModal = (picture: string) => {
  selectedPicture.value = picture;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedPicture.value = '';
};
</script>

<style scoped>

</style>