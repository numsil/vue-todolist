<template>
  <div class="header">
    <h1 class="title">Todo List</h1>
    <div class="add-task">
      <input
        type="text"
        class="task-input"
        v-model="newTextInput"
        placeholder="할 일 작성"
        @keypress.enter="addNewTodo"
      />
      <div class="icon-container">
        <Icon type="plus" @click="addNewTodo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Icon from "./common/icon.vue";

const newTextInput = ref("");
const textInput = ref([] as string[]);

console.log("input", textInput);

const emit = defineEmits(["addNewTodo"]);

const addNewTodo = () => {
  textInput.value.push(newTextInput.value);
  emit("addNewTodo", textInput.value);
  newTextInput.value = "";
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: rgb(255, 255, 255, 0.2);
  .title {
    color: white;
    text-align: left;
    margin-right: auto;
    padding-left: 45px;
    margin-bottom: 5px;
    padding-top: 10px;
  }
}
.add-task {
  display: flex;
  width: 500px;
  height: 30px;
  font-size: 16;
}
.task-input {
  background-color: rgb(255, 255, 255, 0);
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
}
.icon-container {
  display: inline-block;
  position: relative;
  margin-left: 10px;
  top: -2px;
}
</style>
