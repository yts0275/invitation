<template>
  <div class="text-[.5rem] flex flex-col rounded-xl w-44 max-w-xl bg-stone-100 hover:bg-stone-200 flex-none text-xs p-4 justify-between">
    <h2 class="">{{ book.name }}</h2>
    <!-- <p class="">{{ truncateContent(book.content, 10) }}</p> -->
    <p class="">{{ book.content }}</p>
    <p class="">
      {{ formatDate(book.updated_at) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

type GuestBook = {
  id: number,
  name: string,
  content: string,
  created_at: Date,
  updated_at: Date
}

defineProps<{ book: GuestBook }>()

function formatDate(date: Date): string {
  return dayjs(date).format('MM월 DD일 HH:mm')
}


</script>

<style lang="scss" scoped>

</style>