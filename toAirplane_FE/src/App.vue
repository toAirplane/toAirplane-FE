<script setup>
import HeaderNav from './components/HeaderNav/HeaderNav.vue';
import Footer from './components/Footer/Footer.vue';
import Main from './components/Main.vue';
</script>

<template>
  <div id="app">
    <HeaderNav></HeaderNav> <!-- 헤더 -->
    <Main class="main"></Main> <!-- 메인 콘텐츠 -->
    <Footer></Footer> <!-- 푸터 -->
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 */
}

.main {
  flex-grow: 1; /* 남은 공간을 모두 차지하도록 설정 */
  overflow-y: auto; /* 콘텐츠가 많을 경우 스크롤이 생기도록 설정 */
}
</style>
