<script setup>
import { ref } from 'vue';

// 동적으로 로드할 컴포넌트들 import
import diarySortCom1 from "./DiarySortCom/diarySortCom1.vue";
import diarySortCom2 from './DiarySortCom/diarySortCom2.vue';
import diarySortCom3 from './DiarySortCom/diarySortCom3.vue';
import diarySortCom4 from './DiarySortCom/diarySortCom4.vue';
import diarySortCom5 from './DiarySortCom/diarySortCom5.vue';

// 선택된 컴포넌트를 저장하는 변수
const selecteddiarySortCom = ref(diarySortCom1);

// 선택된 버튼을 저장하는 변수 (색상 변경을 위한 변수)
const selectedButton = ref(1);

// 버튼 클릭 시 컴포넌트를 변경
function changediarySortCom(diarySortComIndex, buttonIndex) {
  // 컴포넌트 변경
  switch (diarySortComIndex) {
    case 1:
      selecteddiarySortCom.value = diarySortCom1;
      break;
    case 2:
      selecteddiarySortCom.value = diarySortCom2;
      break;
    case 3:
      selecteddiarySortCom.value = diarySortCom3;
      break;
    case 4:
      selecteddiarySortCom.value = diarySortCom4;
      break;
    case 5:
      selecteddiarySortCom.value = diarySortCom5;
      break;
    default:
      selecteddiarySortCom.value = null;
      break;
  }

  // 버튼의 활성화 상태 변경 (색상 변경을 위한 변수 설정)
  selectedButton.value = buttonIndex;
}
</script>

<template>
  <div class="diarySortLike">
    <div class="diarySortLike-top">
      <h1>여행 일지</h1>
      <button class="findMore-btn">더 찾아보기</button>
    </div>

    <!-- 버튼들로 컴포넌트 변경 -->
    <div class="diarySortCom-selector">
      <button 
        :class="{ active: selectedButton === 1 }" 
        @click="changediarySortCom(1, 1)"
        :style="{ backgroundColor: selectedButton === 1 ? '#849b65' : '#96b173' }">
        부산
      </button>
      <button 
        :class="{ active: selectedButton === 2 }" 
        @click="changediarySortCom(2, 2)"
        :style="{ backgroundColor: selectedButton === 2 ? '#849b65' : '#96b173' }">
        서울
      </button>
      <button 
        :class="{ active: selectedButton === 3 }" 
        @click="changediarySortCom(3, 3)"
        :style="{ backgroundColor: selectedButton === 3 ? '#849b65' : '#96b173' }">
        경주
      </button>
      <button 
        :class="{ active: selectedButton === 4 }" 
        @click="changediarySortCom(4, 4)"
        :style="{ backgroundColor: selectedButton === 4 ? '#849b65' : '#96b173' }">
        제주도
      </button>
      <button 
        :class="{ active: selectedButton === 5 }" 
        @click="changediarySortCom(5, 5)"
        :style="{ backgroundColor: selectedButton === 5 ? '#849b65' : '#96b173' }">
        대전
      </button>
    </div>

    <!-- 동적으로 선택된 컴포넌트 출력 -->
    <div class="diarySortLike-card">
      <component :is="selecteddiarySortCom" />
    </div>
  </div>
</template>

<style scoped>
.diarySortLike {
  text-align: center;
}

.diarySortLike-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.findMore-btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  background-color: #308094;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.findMore-btn:hover {
  background-color: #256d76;
}

.diarySortCom-selector {
  margin-top: 10px;
  display: flex;
  gap: 15px;
}

.diarySortCom-selector button {
  padding: 10px 30px;
  font-size: 1.1rem;
  background-color: rgb(195, 224, 156);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* 클릭된 버튼의 배경색 변경 */
.diarySortCom-selector button:hover {
  background-color: #849b65;
}

/* 활성화된 버튼에 대한 스타일 */
.diarySortCom-selector button.active {
  background-color: #849b65;
}

.diarySortLike-card {
  margin-top: 20px;
}
</style>
