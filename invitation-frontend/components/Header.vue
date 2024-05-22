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
      <div class="mx-4 mb-10 mt-12">
        <p class="text-center text-xl">결혼식 시간</p>
        <p class="text-center text-xl">결혼식 장소</p>
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
