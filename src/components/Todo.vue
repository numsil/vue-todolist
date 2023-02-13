<template>
  <div class="main-todo">
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
.main-todo {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 700px;
  // border-radius: 20px;
  // margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-date {
  margin-left: 30px;
  padding-bottom: 20px;
}
.main-todobox {
}
</style>
