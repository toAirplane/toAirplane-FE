// vue-router import
import { createRouter, createWebHistory } from 'vue-router'

// 페이지 컴포넌트들 import
import Home from '@/components/MainHome/MainHome.vue'
import FindMap from '@/components/FindMap/FindMap.vue'
import TravelDiary from '@/components/TravelDiary/TravelDiary.vue'
import TravelPlan from '@/components/TravelPlan/TravelPlan.vue'
import Notice from '@/components/Notice/Notice.vue'
import MyPage from '@/components/MyPage/MyPage.vue'

// 라우터 설정
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/findMap', name: 'findMap', component: FindMap },
  { path: '/travelDiary', name: 'travelDiary', component: TravelDiary },
  { path: '/travelPlan', name: 'travelPlan', component: TravelPlan },
  { path: '/notice', name: 'notice', component: Notice },
  { path: '/myPage', name: 'myPage', component: MyPage },
]

// createRouter로 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 브라우저 히스토리 모드 사용
  routes, // 라우터 설정을 연결
})

export default router
