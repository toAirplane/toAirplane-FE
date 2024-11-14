<script setup>
import { ref, watch } from 'vue';

const currentPage = ref('home');

watch(currentPage, (newPage) => {
  console.log(`현재 페이지: ${newPage}`);
});
</script>

<template>
  <main class="main-content">
    <div v-if="currentPage === 'home'">
      <h2>홈 페이지</h2>
      <p>여행을 떠날 준비가 되었나요?</p>
    </div>
    <div v-if="currentPage === 'destination'">
      <h2>목적지 선택</h2>
      <p>어디로 떠나고 싶으신가요?</p>
    </div>
    <div v-if="currentPage === 'trip'">
      <h2>여행 계획</h2>
      <p>당신의 여행 계획을 세워보세요.</p>
    </div>
    <div v-if="currentPage === 'blog'">
      <h2>여행 블로그</h2>
      <p>다양한 여행 블로그를 확인해보세요.</p>
    </div>
    <div v-if="currentPage === 'signup'">
      <h2>회원가입</h2>
      <p>새로운 여행을 시작하려면 회원가입이 필요합니다.</p>
    </div>
    <div v-if="currentPage === 'login'">
      <h2>로그인</h2>
      <p>로그인 후 더 많은 기능을 이용해 보세요.</p>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  padding: 20px;
  font-size: 1.2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}
</style>
