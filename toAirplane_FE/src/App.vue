<script setup>
import HeaderNav from './components/HeaderNav/HeaderNav.vue';
import Footer from './components/Footer/Footer.vue';
import Main from './components/Main.vue';
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
