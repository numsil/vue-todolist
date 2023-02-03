<!-- 메인 -->
<template>
  <div class="abc">
    <div class="abc-degin">
      <TodoHeader @addNewTodo="onAddNewTodo" />
      <TodoList :textInput="textInput" @addNewTodo="onAddNewTodo" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";

const textInput = ref("");

const onAddNewTodo = (text: string) => {
  textInput.value = text;
  // textInput = text;
};
</script>

<style scoped lang="scss">
body,
html {
  margin: 0 auto;
  padding: 0;
}
.abc {
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
.abc-degin {
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
</style>
