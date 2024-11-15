<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import axios from 'axios';

const props = defineProps({
    showFindIdModal: Boolean,
})

//Emits
const emit = defineEmits(['closeFindIdModal']);

function closeModal() {
    username.value = '';
    email.value = '';
    foundId.value = '';  // foundId를 빈 문자열로 초기화
    emit('closeFindIdModal');
}

//아이디 찾기
const foundId = ref('');

// API 호출 로직
async function findId() {
    // 입력 값 가져오기
    const nameInput = document.getElementById('username').value;
    const emailInput = document.getElementById('email').value;

    if (!nameInput || !emailInput) {
        alert('이름과 이메일을 입력해주세요.');
        return;
    }

    try {
        // Axios를 이용해 POST 요청
        const response = await axios.post('http://localhost:8080/user/findId', {
            name: nameInput,
            email: emailInput,
        });

        // 응답 처리
        // alert(`찾은 아이디: ${response.data}`);
        foundId.value = response.data;
    } catch (error) {
        console.error('Error finding ID:', error);
        alert('아이디를 찾는 중 오류가 발생했습니다.');
    }
}

</script>


<template>
    <div v-if="props.showFindIdModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h1>아이디 찾기</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">이름</label>
          <input type="text" id="username" placeholder="이름을 입력해주세요" />
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력해주세요" />
        </div>
        <button type="submit" @click="findId">아이디 찾기</button>
      </form>
        <p v-if="foundId" class="found-id-text">찾은 아이디: {{ foundId }}</p>
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
  
  .form-group label[for="username"],
  .form-group label[for="email"] {
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

  .found-id-text {
  position: absolute;
  bottom: 30%;  /* 모달 하단에서 20px 위에 위치 */
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: bold;
}

</style>