<script setup>
import HeaderNav from './components/HeaderNav/HeaderNav.vue';
import Footer from './components/Footer/Footer.vue';
import Main from './components/Main.vue';

import { ref } from 'vue';
import SignInModal from "@/components/Sign/SignInModal.vue";
import SignUpModal from "@/components/Sign/SignUpModal.vue";
import FindIdModal from "@/components/Sign/FindIdModal.vue";

// 모달 상태 관리
const showSignInModal = ref(false);
const showSignUpModal = ref(false);
const showFindIdModal = ref(false);

// 로그인 모달 열기
function openSignInModal() {
  showSignInModal.value = true;
}

// 로그인 모달 상태 닫기
function closeSignInModal() {
  showSignInModal.value = false; // 모달 상태 업데이트
}

// 회원가입 모달 열기
function openSignUpModal() {
  showSignInModal.value = false; // 로그인 모달 닫기
  showSignUpModal.value = true; // 회원가입 모달 열기
  console.log("여기ㅣㅣ");
}

//회원가입 모달 닫기
function closeSignUpModal() {
  showSignUpModal.value = false;
}

//아이디찾기 모달 열기
function openFindIdModal() {
  showSignInModal.value = false; // 로그인 모달 닫기
  showFindIdModal.value = true;
}

//아이디찾기 모달 닫기
function closeFindIdModal() {
  showFindIdModal.value = false;
}
</script>

<template>
  <HeaderNav @open-signin="openSignInModal"></HeaderNav>
    <!-- 로그인 모달-->
    <SignInModal 
      @openSignUpModal="openSignUpModal" 
      :showSignInModal="showSignInModal" 
      @closeSignInModal="closeSignInModal"
      @openFindIdModal="openFindIdModal"  />
    <!-- 회원가입 모달 -->
    <SignUpModal  :showSignUpModal="showSignUpModal" @closeSignUpModal="closeSignUpModal"/>
    <FindIdModal  :showFindIdModal="showFindIdModal" @closeFindIdModal="closeFindIdModal"/>
    <Main></Main>
    <Footer></Footer>
</template>

<style scoped></style>
