<template>
  <div>
    <div class="main-date"><TodoDate /></div>
    <div class="main-todobox">
      <TodoHeader @addNewTodo="onAddNewTodo" />
      <TodoList :todos="todos" @addNewTodo="onAddNewTodo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import TodoDate from "./TodaDate.vue";
import { ref } from "vue";

const todos = ref("");
// const todos = ref<string[]>("");

const onAddNewTodo = (text: string) => {
  todos.value = text;
  // textInput = text;
};
</script>

<style scoped lang="scss">
.main-todobox {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  // border: 1px solid white;
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
