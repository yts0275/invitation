<template>
  <div class="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 class="text-xl font-bold mb-2">{{ book.name }}</h2>
    <p class="text-gray-700 mb-4">{{ truncateContent(book.content, 10) }}</p>
    <p class="text-sm text-gray-500">
      Created:  {{ formatDate(book.created_at) }} <br />
      Updated:  {{ formatDate(book.updated_at) }}
    </p>
  </div>
</template>

<script setup lang="ts">
type GuestBook = {
  id: number,
  name: string,
  content: string,
  created_at: Date,
  updated_at: Date
}

defineProps<{ book: GuestBook }>()

function truncateContent(content: string, maxLength: number): string {
  if (content.length > maxLength) {
    return content.slice(0, maxLength) + '...';
  } else {
    return content;
  }
}


function formatDate(date: Date): string {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
}
</script>

<style lang="scss" scoped>

</style>