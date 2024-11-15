<script setup>
import img1 from '@/assets/FindRegionFilter/부산.jpg'
import img2 from '@/assets/FindRegionFilter/서울.jpg'
import img3 from '@/assets/FindRegionFilter/경주1.jpg'
import img4 from '@/assets/FindRegionFilter/제주도2.jpg'
import img5 from '@/assets/FindRegionFilter/대전.PNG'
</script>

<template>
  <div class="findRegionFilter">
    <div class="findRegionFilter-top">
      <h1>여행지 찾기</h1>
      <button class="findMore-btn">더 찾아보기</button>
    </div>
    <div class="findRegionFilter-card">
      <!-- 카드들 -->
      <div class="card" :style="{ backgroundImage: `url(${img1})` }">
        <div class="card-content">
            <h2>부산</h2>
            <button class="explore-btn">둘러보기</button>
        </div>
      </div>
      <div class="card" :style="{ backgroundImage: `url(${img2})` }">
        <div class="card-content">
          <h2>서울</h2>
          <button class="explore-btn">둘러보기</button>
        </div>
      </div>
      <div class="card" :style="{ backgroundImage: `url(${img3})` }">
        <div class="card-content">
          <h2>경주</h2>
          <button class="explore-btn">둘러보기</button>
        </div>
      </div>
      <div class="card" :style="{ backgroundImage: `url(${img4})` }">
        <div class="card-content">
          <h2>제주도</h2>
          <button class="explore-btn">둘러보기</button>
        </div>
      </div>
      <div class="card" :style="{ backgroundImage: `url(${img5})` }">
        <div class="card-content">
          <h2>대전</h2>
          <button class="explore-btn">둘러보기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.findRegionFilter {
  text-align: center;
}

.findRegionFilter-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 10px; */
}

.findMore-btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  background-color: #308094;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.findMore-btn:hover {
  background-color: #256d76;
}

.findRegionFilter-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 카드가 최소 250px 이상 차지하고 남은 공간은 균등 분배 */
  gap: 30px; /* 카드 간격 조절 */
  width: 100%; /* 좌우 꽉 차게 */
}

.card {
  position: relative;
  height: 350px;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: white;
  font-weight: bold;
}

.card-content h2 {
  font-size: 2rem;
  margin: 0;
}

.explore-btn {
  align-self: flex-start;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.explore-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* 반응형 */
@media (max-width: 768px) {
  .findRegionFilter-top {
    flex-direction: column;
    gap: 15px;
  }

  .findMore-btn {
    width: 100%;
    font-size: 1rem;
  }
}
</style>
