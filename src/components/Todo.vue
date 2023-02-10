<template>
  <div>
    <div class="main-date"><TodoDate /></div>
    <div class="main-todobox">
      <TodoHeader />
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import TodoDate from "./TodaDate.vue";
</script>

<style scoped lang="scss">
.main-todobox {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  border-radius: 20px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-date {
  display: flex;
  // justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: 30px;
  width: 600px;
  height: 150px;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
