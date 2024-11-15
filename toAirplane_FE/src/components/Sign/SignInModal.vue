<script setup>
import { defineProps, defineEmits } from 'vue';

// Props
const props = defineProps({
  showSignInModal: Boolean,
});

// Emits
const emit = defineEmits(['closeSignInModal', 'openSignUpModal', 'openFindIdModal']);

// 모달 닫기
function closeModal() {
  emit('closeSignInModal'); // 부모에게 모달 닫기 요청
}

// 회원가입 모달 열기
function openSignUp() {
  emit('openSignUpModal');  // 부모에게 회원가입 모달 열기 요청
}

// 아이디 찾기 모달 열기
function openFindIdModal() {
  emit('openFindIdModal');
}

// 로그인 처리
function handleLogin() {
  // 로그인 처리 로직 (예시: 콘솔에 출력)
  if (props.showSignInModal) {
    closeModal(); // 로그인 성공 시 모달 닫기
  } else {
    alert("아이디와 비밀번호를 입력해주세요.");
  }
}
</script>

<template>
  <div v-if="props.showSignInModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h1>로그인</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="userid">아이디</label>
          <input type="text" id="userid" placeholder="아이디를 입력하세요" />
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <button type="submit">로그인</button>
        <a href="#" class="forgot-id-link" @click="openFindIdModal">내 아이디가 생각나지 않나요?</a>
        <a href="#" class="sign-up-link" @click="openSignUp">아직 회원이 아니신가요?</a>
      </form>
    </div>
  </div>
</template>
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 20px;
    width: 400px;
    min-height: 400px; /* 최소 높이를 설정 */
    display: flex;
    justify-content: center; /* 콘텐츠 세로 중앙 정렬 */
    align-items: center; /* 콘텐츠 가로 중앙 정렬 */
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: auto; /* 높이를 자동으로 설정 */
  }
  
  h1 {
    text-align: center;
    color: #F29F05;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* 폼 내 모든 요소를 가로로 중앙 정렬 */
  }
  
  .form-group {
    display: flex; /* 부모 컨테이너를 flex로 설정 */
    margin-bottom: 15px;
    flex-direction: row; /* 라벨과 입력값을 가로로 배치 */
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center; /* 각 요소를 양쪽 끝에 배치 */
  }
  
  .form-group label {
    margin-right: 10px; /* 라벨과 입력 필드 사이의 간격을 줌 */
    width: 80px; /* 라벨의 고정 너비를 설정 */
    text-align: center;
  }
  
  .form-group input {
    flex: 1; /* 입력 필드가 남은 공간을 차지하도록 설정 */
    width: 200px;
    height: 20px;
    padding: 8px;
    margin: 5px 0;
    border-radius: 4px;
    background-color: #f0f0f0;
    border: none;
    padding: 12px px;
  }
  
  button {
    width: 200px;
    height: 40px;
    background-color: #F2CB57;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    align-self: center; /* 버튼을 가로로 가운데 정렬 */
    color: #61534A;  /* 글자 색상 */
    font-size: 18px; /* 글씨 크기 설정 */
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  button:active {
  background-color: #F29F05; /* 클릭했을 때의 색상 */
  }
  
  .close-btn {
    width: 100%;
    padding: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .close-btn:hover {
    background-color: #e53935;
  }
  
  .form-group label[for="userid"],
  .form-group label[for="password"] {
  color: #61534A; /* 원하는 색으로 설정 */
  font-weight: bold;
  }
  
  .forgot-id-link {
  margin-top: 5px;
  color: #80A677;
  font-size: 12px;
  text-decoration: none; /* 기본 링크 스타일 제거 */
  background-color: transparent; /* 배경 색상 없애기 */
  margin-bottom: 5px;
  }
  
  .forgot-id-link:hover {
  text-decoration: underline; /* hover 시 밑줄 추가 */
  }
  
  .sign-up-link{
  color: #E45D5A;
  font-size: 12px;
  text-decoration: none; /* 기본 링크 스타일 제거 */
  background-color: transparent; /* 배경 색상 없애기 */
  }
  
  .sign-up-link:hover {
  text-decoration: underline; /* hover 시 밑줄 추가 */
  }
  </style>