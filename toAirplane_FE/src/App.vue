<script setup>
import HeaderNav from './components/HeaderNav/HeaderNav.vue';
import Footer from './components/Footer/Footer.vue';
import Main from './components/Main.vue';
</script>

<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex: 1;
}
</style>
