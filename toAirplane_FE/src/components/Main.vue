<script setup>
import { defineAsyncComponent } from 'vue';
</script>

<template>
  <router-view /> <!-- 라우터에 맞는 컴포넌트를 동적으로 표시 -->
  <!-- <main class="main-content">
  </main> -->
</template>

<style scoped>
.main-content {
  /* padding: 10px; */
  flex-grow: 1;
  overflow-y: auto;
}
</style>
