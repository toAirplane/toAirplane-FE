<!-- 여행 정보 : 오늘의 날씨, 지금 하는 축제 -->
<script setup>
import FestivalAPI from "./FestivalAPI.vue";
import WeatherAPI from "./WeatherAPI.vue";


</script>

<template>
    <div>
        <P>여행 정보 전체</P>
        <WeatherAPI></WeatherAPI>
        <FestivalAPI></FestivalAPI>
    </div>
</template>

<style scoped>

</style>