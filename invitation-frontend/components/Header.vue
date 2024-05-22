<template>
  <div class="w-full flex flex-col">
    <div class="items-center justify-center max-w-xl mx-auto w-full mt-5 relative">
      <div class="text-container text-center -translate-x-1/2 w-full z-10">
        <p>우리 결혼합니다.</p>
        <span>기륜 & 희은</span>
      </div>
      <div class="absolute left-4 right-4 top-4 bottom-0 content-[''] block border-[1px] border-gray-200 z-10"></div>
      <div class="relative">
        <img src="/image/main-image.jpg" alt="">
      </div>
      <div class="mb-10 mt-10">
        <p class="text-center text-xl">2024.12.14 토요일</p>
        <p class="mt-2 text-center text-xl">경주 블루원</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.text-container {
  color: black;
  position: absolute;
  font-size: 1rem;
  left: 50%;
  top: 10%;
}

.box-container {
  left: 20%;
  right: 20%;
  top: 10%;
  bottom: 0;
}
</style>
