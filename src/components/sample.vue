<template>
  <div>
    <h1>미세먼지 농도</h1>
    <p v-if="isLoading">로딩 중...</p>
    <p v-else-if="errorMessage">{{ errorMessage }}</p>
    <ul v-else>
      <li v-for="(item, index) in items" :key="index">
        {{ item.dataTime }} 기준: {{ item.pm10Value }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface AirQualityData {
  dataTime: string;
  pm10Value: string;
}

const API_KEY =
  "UeXBqyTjPcS1Ksf%2FLPNCFNbjqK55nMckPrhG1bSNPYdPwas%2Fu5u9TztERQlljzW9alMlWEC1KzNvCoNAbGPfnQ%3D%3D";
const CITY_NAME = "서울";
const API_URL = `http://apis.data.go.kr/B552584/ArpltnStatsSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${CITY_NAME}&dataTerm=DAILY&ver=1.3&returnType=json&serviceKey=${API_KEY}`;

export default {
  name: "TodaDate",
  setup() {
    const isLoading = ref(true);
    const items = ref<AirQualityData[]>([]);
    const errorMessage = ref("");

    onMounted(async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data?.response?.body?.items?.[0];
        if (data) {
          items.value = data?.list;
        } else {
          errorMessage.value = "데이터를 불러올 수 없습니다.";
        }
      } catch (error) {
        errorMessage.value = "오류가 발생했습니다.";
      } finally {
        isLoading.value = false;
      }
    });

    return {
      isLoading,
      items,
      errorMessage,
    };
  },
};
</script>
