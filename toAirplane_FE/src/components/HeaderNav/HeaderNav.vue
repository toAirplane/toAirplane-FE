<script setup>
import { ref } from 'vue';

// 메인 페이지에서 변화할 내용을 저장할 상태 변수
const currentPage = ref('home');

// 페이지 변경 함수 (라우터 이동 없이 임시 페이지 변경)
function changePage(page) {
  currentPage.value = page;
}
</script>

<template>
  <header class="header">
    <div class="logo">저 오늘 떠나요</div>

    <!-- 왼쪽 네 개의 버튼 -->
    <div class="nav-buttons">
      <button @click="changePage('home')">홈</button>
      <button @click="changePage('destination')">목적지</button>
      <button @click="changePage('trip')">여행 계획</button>
      <button @click="changePage('blog')">블로그</button>
    </div>

    <!-- 오른쪽 두 개의 버튼 -->
    <div class="auth-buttons">
      <button @click="changePage('signup')">회원가입</button>
      <button @click="changePage('login')">로그인</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.nav-buttons button,
.auth-buttons button {
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #FCF8F4;
  border: 1px solid #6B625D;
  border-radius: 5px;
}

.nav-buttons {
  display: flex;
}

.auth-buttons {
  display: flex;
}

button:hover {
  background-color: #F4E1D2;
}
</style>
