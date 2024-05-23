<template>
  <div id="directions-section" class="mt-10 pb-10 bg-[#e9ecef]">
    <h2 class="py-5 mb-5 title">찾아오시는 길</h2>
    <div class="flex justify-center gap-4">
      <p>경주시 블루원 웨딩 컨벤션</p>
      <!-- 복사 아이콘 -->
      <img src="/image/copy-icon.png" alt="" class="w-6 h-6 cursor-pointer" @click="copyToClipboard">
      <a href="https://wd.blueone.com/content/01about/02_01.jsp" class="underline">
        상세보기
      </a>
    </div>
    <div class="my-3 max-w-xl mx-auto w-full">
      <div ref="mapContainer" class="w-full h-80 mx-auto"></div>
    </div>
    <div class="flex justify-center space-x-10 mt-4">
      <!-- 네이버 지도 -->
      <div class="relative group">
        <a
          href="https://naver.me/G2Uy7Iys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/image/map-icon1.png" alt="" class="w-11 h-11 border border-gray-300 rounded">
        </a>
        <span class="z-10 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
          지도로 이동하려면 클릭하세요.
        </span>
      </div>
      <!-- 카카오 맵 -->
      <div class="relative group">
        <a
          href="https://kko.to/yvVbFJ8o03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/image/map-icon2.png" alt="" class="w-11 h-11 border border-gray-300 rounded">
        </a>
        <span class="z-10 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
          지도로 이동하려면 클릭하세요.
        </span>
      </div>
      <!-- 구글 맵 -->
      <div class="relative group">
        <a
          href="https://maps.app.goo.gl/xUp8zsJm5w1Acqrj7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/image/map-icon3.png" alt="" class="w-11 h-11 border border-gray-300 rounded">
        </a>
        <span class="z-10 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
          지도로 이동하려면 클릭하세요.
        </span>
      </div>
    </div>
  
  </div>
</template>


<script setup lang="ts">
const mapContainer = ref<HTMLElement | null>(null);

// 주소(Address) : 대한민국 경상북도 경주시 천군동 산30-3 블루원리조트 KR
// 대한민국 경상북도 경주시 천군동 98 KR
// Latitude : 35.82509590000001
// Longitude : 129.2908045
onMounted(() => {
  console.log('window.kakao = ', window.kakao)
  if (window.kakao && window.kakao.maps) {
    const mapOption = {
      center: new window.kakao.maps.LatLng(35.82528, 129.29087), // 지도의 중심 좌표
      level: 3 // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(mapContainer.value, mapOption); // 지도 생성 및 객체 리턴

    let marker = new kakao.maps.Marker({ 
        // 지도 중심좌표에 마커를 생성합니다 
        position: map.getCenter() 
    }); 

    marker.setMap(map);
  }
});

const copyToClipboard = () => {
  const text = '경상북도 경주시 블루원 웨딩 컨벤션';
  navigator.clipboard.writeText(text).then(() => {
    alert('주소가 클립보드에 복사되었습니다.');
  });
};

</script>

<style scoped>
.map-container {
  margin: 0 auto;
  width: 80%;
  height: 500px;
}
</style>