<template>
  <div class="mt-10 pb-20">
    <div class="mx-auto max-w-3xl">
      <h2 class="title mb-7">마음 전하실 곳</h2>
      <div class="flex justify-center">
        <div class="me-8 md:me-20 text-center flex flex-col items-center">
          <p>신랑 <b>금기륜</b></p>
          <div class="flex gap-3 mt-2 mb-5">
            <div class="bg-[#e9ecef] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="copyToClipboard('010-2812-7942')">
              <img src="/image/phone.png" alt="" class="w-4 h-4">
            </div>
            <div class="bg-[#e9ecef] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="openModal">
              <img src="/image/detail.png" alt="" class="w-4 h-4">
            </div>
          </div>
        </div>
        <div class="ms-8 md:ms-20 text-center">
          <p>신부 <b>이희은</b></p>
          <div class="flex gap-3 mt-2 mb-5">
            <div class="bg-[#e9ecef] w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/image/phone.png" alt="" class="w-4 h-4">
            </div>
            <div class="bg-[#e9ecef] w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/image/detail.png" alt="" class="w-4 h-4">
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click="closeModal">
      <div class="bg-white p-4 rounded max-h-[80vh] overflow-auto relative" @click.stop>
        <button class="absolute top-2 right-2 text-gray-500" @click="closeModal">Close</button>
        <p>여기에 상세 정보를 입력하세요.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false);

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('전화번호가 클립보드에 복사되었습니다.');
  });
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>

</style>