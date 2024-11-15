<script setup>
import DiarySortLike from "./DiarySortLike.vue";
import FindRegionFilter from "./FindRegionFilter.vue";
import TravelInfo from "./TravelInfo.vue";


</script>

<template>
    <div class="home">
        <FindRegionFilter class="components"></FindRegionFilter>
        <DiarySortLike class="components"></DiarySortLike>
        <TravelInfo class="components"></TravelInfo>
    </div>
</template>

<style scoped>
.home {
    padding-top : 50px;
    padding-left: 250px;
    padding-right: 250px;
    font-size: 25px;
    color : #2e8094;
    /* font-weight: bold; */
}

.components {
    margin-bottom: 50px;
}
</style>