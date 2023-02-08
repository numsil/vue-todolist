<!-- 메인 -->
<template>
  <!-- font-family: "Jua", sans-serif; -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Hi+Melody&family=Jua&display=swap"
    rel="stylesheet"
  />
  <div class="main-todolist">
    <div>
      <div class="main-date"><TodoDate /></div>
      <div class="main-todobox">
        <TodoHeader @addNewTodo="onAddNewTodo" />
        <TodoList :todos="todos" @addNewTodo="onAddNewTodo" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoDate from "./components/TodaDate.vue";

const todos = ref("");

const onAddNewTodo = (text: string) => {
  todos.value = text;
  // textInput = text;
};
</script>

<style scoped lang="scss">
body,
html {
  margin: 0 auto;
  padding: 0;
}
.main-todolist {
  height: 100vh;
  background: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
}
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
