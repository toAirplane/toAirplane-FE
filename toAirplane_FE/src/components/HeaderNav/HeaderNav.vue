<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // useRouter import

/*
  로그인 로그아웃 상태 때 수정
  로그아웃 했을 때 바로 홈으로 이동되도록 하기 추가
*/

// 로그인 상태 변수 (로그인 여부를 확인)
const isLoggedIn = ref(false); // 기본값은 로그아웃 상태

// 로그인 상태 변경 함수 (임시 예제용)
function toggleLogin() {
  isLoggedIn.value = !isLoggedIn.value;
}
</script>

<template>
  <header class="header">
    <div class="logo">
      <font-awesome-icon icon="fa-solid fa-plane-departure" style="color: #35648c; margin-right: 10px;" />
      저 오늘 떠나요
    </div>

    <!-- 네비게이션 메뉴 -->
    <nav class="nav-buttons">
      <router-link
        v-for="page in ['home', 'findMap', 'travelDiary']"
        :key="page"
        :to="{ name: page }"
        class="nav-link"
        active-class="active" 
      > <!-- 활성화된 링크에 'active' 클래스를 추가 -->
        {{ page === 'home' ? 'HOME' : page === 'findMap' ? '관광지 찾기' : '여행일지' }}
      </router-link>

      <!-- 로그인 상태에 따라 여행계획과 공지사항의 순서를 조정 -->
      <router-link
        v-if="isLoggedIn"
        :to="{ name: 'travelPlan' }"
        class="nav-link"
        active-class="active"
      >
        여행계획
      </router-link>

      <router-link
        :to="{ name: 'notice' }"
        class="nav-link"
        active-class="active"
      >
        공지사항
      </router-link>
    </nav>

    <!-- 로그인/로그아웃 + 마이페이지 -->
    <div class="auth-buttons">
      <!-- 로그인 버튼: 로그인되지 않았을 때만 표시 -->
      <button v-if="!isLoggedIn" class="login-logout" @click="toggleLogin">로그인</button>
      <!-- 로그인된 상태에서 마이페이지, 로그아웃 버튼 -->
      <div v-else class="login-ing">
        <router-link to="/myPage" class="nav-link">
          <button class="myPage">마이페이지</button>
        </router-link>
        <button class="login-logout" @click="toggleLogin">로그아웃</button>
      </div>
    </div>
  </header>

  <main>
    <p>현재 페이지: {{ $route.name }}</p>
    <!-- main content depending on the current route -->
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #FCF8F4;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 35px;
  color: #35648c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: bold;
  margin-right: 35px;
}

.nav-buttons {
  display: flex;
  gap: 25px;
}

.nav-link {
  cursor: pointer;
  color: #61534A;
  font-size: 1.3rem;
  text-decoration: none; /* 링크의 기본 밑줄을 없앰 */
}

.nav-link:hover {
  color: #a18776;
}

.nav-link.active {
  color: #ECB220;
  font-weight: bold;
}

.auth-buttons {
  display: flex;
  gap: 30px;
  margin-left: auto;
}

.auth-buttons button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.3s ease;
  /* 여기에 버튼 크기와 스타일을 맞추는 공통 속성을 추가 */
  min-width: 120px; /* 버튼 크기 고정 (일관성) */
}

.login-ing {
  display: flex;
}

.auth-buttons button.login-logout {
  background-color: #F2CB57;
  color: #61534A;
}

.auth-buttons button.login-logout:hover {
  background-color: #ecc347;
}

.auth-buttons button.myPage {
  background-color: #F29F05;
  color: #FFF9EF;
  margin-right: 20px;
}

.auth-buttons button.myPage:hover {
  background-color: #e69d16;
}

/* 로그인/로그아웃 버튼에 동일한 스타일 적용 */
.auth-buttons button.login-logout, .auth-buttons button.myPage {
  min-width: 100px; /* 크기를 일관되게 맞추기 위한 최소 너비 설정 */
}
</style>
