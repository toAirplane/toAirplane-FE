<script setup>
import { ref } from 'vue'
import img1 from '@/assets/FindRegionFilter/부산.jpg'
import img2 from '@/assets/FindRegionFilter/경주2.jpg'

const cards = ref([
  {
    image: img1,
    title: '부산 여행1111',
    date: '2024-11-15',
  },
  {
    image: img2,
    title: '서울 여행',
    date: '2024-11-16',
  },
  {
    image: '/assets/images/card3.jpg',
    title: '경주 여행',
    date: '2024-11-17',
  },
  {
    image: '/assets/images/card4.jpg',
    title: '제주도 여행',
    date: '2024-11-18',
  }
])
</script>

<template>
  <div class="component">
    <div class="card-container">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="card.image" alt="Card Image" class="card-image" />
        <h2 class="card-title">{{ card.title }}</h2>
        <p class="card-date">{{ card.date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;
}

.card {
  width: 400px;
  height: 500px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 30px;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 2px;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  margin-top: 20px;
}

.card-date {
  font-size: 1.3rem;
  text-align: right;
}
</style>
