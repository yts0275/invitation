<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeModal"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div class="inline-block align-bottom bg-white rounded-lg px-7 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" @click.stop>
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              방명록 작성
            </h3>
            <div class="mt-2">
              <form @submit.prevent="submitForm">
                <div class="mb-4">
                  <label for="name" class="block text-sm font-bold mb-2">이름</label>
                  <input v-model="newGuestBook.name" id="name" type="text" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div class="mb-4">
                  <label for="content" class="block text-sm font-bold mb-2">내용</label>
                  <textarea v-model="newGuestBook.content" id="content" required rows="5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="flex justify-between">
                  <button type="submit" class="text-gray-800 hover:text-green-700 font-bold focus:outline-none focus:underline">작성하기</button>
                  <button @click="closeModal" type="button" class="text-gray-500 hover:text-gray-700 font-bold focus:outline-none focus:underline">닫기</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
const emit = defineEmits(['close', 'getData']);

type GuestBook = {
  id: number,
  name: string;
  content: string;
  created_at: Date;
  updated_at: Date;
};

const props = defineProps<{ lastPk: number | null }>()

const newGuestBook = ref<GuestBook>({
  id: props.lastPk ? props.lastPk + 1 : 0,
  name: '',
  content: '',
  created_at: new Date(),
  updated_at: new Date()
});

const submitForm = () => {
  if (newGuestBook.value.name && newGuestBook.value.content) {
    // 여기에 API 호출 로직 추가 (예: POST 요청)
    // 예시로 현재는 콘솔에 로그를 출력합니다.
    axios.post(import.meta.env.VITE_API_URL, newGuestBook.value, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          apikey: import.meta.env.VITE_API_KEY,
        },
      })
      .then((res) => {
        alert('방명록이 정상적으로 작성되었습니다~ 감사합니다 ^^')
        emit('getData')
        closeModal();
      })
      .catch((err) => {
        console.log("err = ", err);
        closeModal();
      });
  }
}

const closeModal = () => {
  emit('close');
}
</script>

<style scoped>

</style>
