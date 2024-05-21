<template>
  <div>
    <h1>테스트 페이지</h1>
    <hr>
    <Swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
    >
      <SwiperSlide v-for="slide in slideData" :key="slide.id">
        <p>번호: {{ slide.id }}</p>
        <p>이름: {{ slide.name }}</p>
        <p>내용: {{ slide.content }}</p>
        <p>작성일자: {{ formatDate(slide.created_at) }}</p>
      </SwiperSlide>
    </Swiper>
    <hr>
  </div>
</template>

<script setup lang="ts">
type Data = {
  id: number;
  name: string;
  content: string;
  created_at: Date;
}

const initialData: Data[] = Array.from({ length: 10}, (_, index) => ({
  id: index + 1,
  name: `user ${index + 1}`,
  content: `content ${index + 1}`,
  created_at: new Date()
}))

const slideData = useState<Data[]>('slideData', () => initialData)

const formatDate = (date: Date) => {
  return date.toLocaleDateString();
}
</script>

<style scoped>

</style>