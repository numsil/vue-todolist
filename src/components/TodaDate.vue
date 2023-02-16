<template>
  <div class="date-content">
    <div class="date-time">
      <div class="current-date">{{ currentDate }}</div>
      <div class="current-time">{{ currentTime }}</div>
    </div>
    <div class="current-dust" v-for="item in dustData.dust" :key="item.id">
      {{ item.stationName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

const currentDate = ref("");
const currentTime = ref("");

const dustData = reactive({
  dust: [] as any[],
});

// const API_KEY =
//   "UeXBqyTjPcS1Ksf%2FLPNCFNbjqK55nMckPrhG1bSNPYdPwas%2Fu5u9TztERQlljzW9alMlWEC1KzNvCoNAbGPfnQ%3D%3D";
// const API_URL = "http://apis.data.go.kr/B552584/ArpltnStatsSvc";

// const getData = async () => {
//   const response = await axios.get(
//     `${API_URL}/getMsrstnAcctoRltmMesureDnsty?serviceKey=${API_KEY}&numOfRows=10&pageSize=10&pageNo=1&startPage=1&stationName=%EC%84%9C%EC%9A%B8&dataTerm=DAILY&ver=1.3`
//   );
//   dustData.dust = response.data;
// };

//날짜 및 시간
const updateDateTime = () => {
  const now = new Date();
  currentDate.value = now.toLocaleDateString().slice(0, -1);
  currentTime.value = now.toLocaleTimeString().slice(0, -3);
  // console.log("date", currentDate.value);
};

onMounted(() => {
  // getData();
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
</script>
<style scoped lang="scss">
.date-content {
  display: flex;
  // flex-direction: row;
  justify-content: space-between;
  width: 550px;
  height: 150px;
  align-items: center;
  border: 2px;
  border-color: black;
}
.current-date {
  color: white;
  font-size: 40px;
  font-family: "Jua", sans-serif;
}
.current-time {
  color: white;
  font-size: 35px;
  font-family: "Jua", sans-serif;
}
.date-time {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.current-dust {
  color: white;
  font-size: 20px;
  font-family: "Jua", sans-serif;
}
</style>
