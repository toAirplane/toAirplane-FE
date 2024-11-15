<template>
    <div v-if="props.showSignUpModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <h1>회원가입</h1>
        <form @submit.prevent="handleSignUp">
          <div class="form-group">
            <label for="name">이름</label>
            <input type="text" id="name" v-model="name" placeholder="이름을 입력하세요" />
          </div>
          <div class="form-group">
              <label for="signUpUsername">아이디</label>
              <input type="text" id="signUpUsername" v-model="signUpUsername" placeholder="아이디를 입력하세요" />
              <button type="button" class="checkid-button" @click="checkUsername">중복 확인</button>
          </div>
          
          <div v-if="usernameAvailable !== null" class="availability-message">
            <span :style="{ color: usernameAvailable ? 'green' : 'red' }">
              {{ usernameAvailable ? '사용 가능한 아이디입니다.' : '이미 사용 중인 아이디입니다.' }}
            </span>
          </div>
          
          <div class="form-group">
            <label for="password">비밀번호</label>
            <input type="password" id="password" v-model="signUpPassword" placeholder="비밀번호를 입력하세요" />
          </div>
          
          <div class="form-group">
            <label for="confirmPassword">비밀번호 확인</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="비밀번호를 다시 입력하세요" />
          </div>
          
          <div class="form-group">
            <label for="email">이메일</label>
            <input type="email" id="email" v-model="email" placeholder="이메일을 입력하세요" />
          </div>
          
          <div class="form-group">
            <label for="phone">전화번호</label>
            <input type="text" id="phone" v-model="phone" placeholder="전화번호를 입력하세요" />
          </div>
          
          <button type="submit" class = "sign-up-button":disabled="!isSignUpFormValid">가입하기</button>
        </form>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref, computed, defineProps, defineEmits } from 'vue';
  // Props
  const props = defineProps({
    showSignUpModal: Boolean,
  });

  //Emits
  const emit = defineEmits(['closeSignUpModal']);

function closeModal() {
    // 각 필드 초기화
    name.value = '';
    signUpUsername.value = '';
  signUpPassword.value = '';
  confirmPassword.value = '';
  email.value = '';
  phone.value = '';
  usernameAvailable.value = null;

    emit('closeSignUpModal', false);
}

// 회원가입 폼 데이터
const name = ref('');
  const signUpUsername = ref('');
  const signUpPassword = ref('');
  const confirmPassword = ref('');
  const email = ref('');
  const phone = ref('');
  const usernameAvailable = ref(null);

  // 아이디 중복 확인
  function checkUsername() {
    usernameAvailable.value = signUpUsername.value.length > 3; // 예시: 아이디가 4자 이상일 때 사용 가능
  }

  // 회원가입 폼 유효성 검사
  const isSignUpFormValid = computed(() => {
    return (
      signUpUsername.value &&
      signUpPassword.value &&
      confirmPassword.value &&
      email.value &&
      phone.value &&
      signUpPassword.value === confirmPassword.value &&
      usernameAvailable.value === true
    );
  });

  // 회원가입 처리
  function handleSignUp() {
    if (isSignUpFormValid.value) {
      const userData = {
        name: name.value,
        signUpUsername: signUpUsername.value,
        email: email.value,
        phone: phone.value,
      };
      emit('sign-up', userData); // 부모 컴포넌트로 회원가입 데이터 전달
      closeModal(); // 모달 닫기
    } else {
      alert('모든 정보를 정확히 입력해주세요.');
    }
  }

  </script>
  
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
    width: 500px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; /* 모든 자식 요소들을 가로로 중앙 정렬 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center; /* 제목을 가로로 중앙 정렬 */
    color: #F29F05;
    font-weight: bold;
    margin-bottom: 20px;
    width: 100%; /* 부모 컨테이너의 너비를 가득 채우도록 설정 */
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* 폼 내 모든 요소들을 가로로 중앙 정렬 */
  }
  
  .form-group {
    display: flex;
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center; /* 세로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    width: 100%; /* 부모 너비에 맞게 전체 너비 설정 */
    flex-wrap: nowrap; /* 줄바꿈 방지 */
  }
  
  .form-group label {
    margin-right: 10px;
    width: 130px; /* 라벨의 너비를 고정 */
    text-align: center; /* 라벨의 텍스트 오른쪽 정렬 */
    color: #61534A;
    font-size: 18px;
  }
  
  .form-group input {
    width: 200px;
    height: 20px;
    padding: 8px;
    margin: 5px 0;
    border-radius: 10px;
    background-color: #f0f0f0;
    border: none;
  }
  
::placeholder{
    text-align: center;
  }
  .id-group {
    display: flex;
    flex-direction: row;
    align-items: center; /* 세로 중앙 정렬 */
  }
  
  button:active {
    background-color: #F29F05;
  }
  
  .availability-message {
    margin-top: 5px;
    font-size: 12px;
  }
  
  .availability-message span {
    font-weight: bold;
  }
  
  .checkid-button {
    width: 80px; /* 버튼 크기 수정 */
    height: 30px;
    background-color: #F2CAA7;
    color: #61534A;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    align-self: center; /* 버튼을 가로로 중앙 정렬 */
    margin-left: 20px;
  }

  .sign-up-button {
    width: 300px; /* 버튼 크기 수정 */
    height: 40px;
    background-color: #F2CB57;
    color: #61534A;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    align-self: center; /* 버튼을 가로로 중앙 정렬 */
    margin-left: 20px;
    font-size: 20px;
  }
  </style>
  