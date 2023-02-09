<template>
  <div class="date-content">
    <div class="date-time">
      <div class="current-date">{{ currentDate }}</div>
      <div class="current-time">{{ currentTime }}</div>
    </div>
    <!-- <div class="current-dust">미세먼지 데이터</div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const currentDate = ref("");
const currentTime = ref("");

const updateDateTime = () => {
  const now = new Date();
  currentDate.value = now.toLocaleDateString().slice(0, -1);
  currentTime.value = now.toLocaleTimeString().slice(0, -3);
  console.log("date", currentDate.value);
};

onMounted(() => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
</script>
<style scoped lang="scss">
.date-content {
  display: flex;
  //   flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  text-align: right;
}
</style>
