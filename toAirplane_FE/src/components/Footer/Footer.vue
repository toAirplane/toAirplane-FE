<script setup>
</script>

<template>
  <footer class="footer">
    <p class="footer-project-name">저 오늘 떠나요</p>
    <p class="footer-team-name">공항으로 (부울경_03반_윤유빈_최정원_홍해지)</p>
    <p class="footer-ssafy">@SSAFY12_PJT_EnjoyTrip</p>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;  /* 화면 하단에 고정 */
  bottom: 0;        /* 화면 하단에 붙임 */
  left: 0;          /* 좌측에 붙임 */
  width: 100%;      /* 화면 너비에 맞게 확장 */
  background-color: #FCF8F4;
  text-align: center;
  padding: 10px 0;
  margin: 0;
}

.footer-project-name,
.footer-team-name {
  color: #a0948c;
  font-size: 0.9rem;
  margin: 0;
}

.footer-ssafy {
  color: #ffcba0;
  font-size: 0.7rem;
  padding-top: 20px;
  margin: 0;
}
</style>
