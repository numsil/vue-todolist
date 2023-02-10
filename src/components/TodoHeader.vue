<template>
  <div class="header">
    <h1 class="title">Todo List</h1>
    <form @submit.stop="addNewTodo">
      <div class="add-task">
        <input
          type="text"
          class="task-input"
          v-model="newTextInput"
          placeholder="할 일 작성"
          ref="input"
        />
        <!-- @keypress.enter="addNewTodo" -->
        <div class="icon-container">
          <Icon type="plus" @click="addNewTodo" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Icon from "./common/icon.vue";

const newTextInput = ref("");
let todos = ref<string[]>([]);
const input = ref();

// const emit = defineEmits(["addNewTodo"]);
const addNewTodo = () => {
  const getItem = localStorage.getItem("inputData");
  // emit;
  if (newTextInput.value) {
    if (getItem) {
      todos.value = [...JSON.parse(getItem)];
    }
    todos.value.push(newTextInput.value);
    localStorage.setItem("inputData", JSON.stringify(todos.value));
    // emit("addNewTodo", todos.value);
    newTextInput.value = "";
  }
  // return { addNewTodo };
};

onMounted(() => {
  input.value.focus();

  //   const storedData = localStorage.getItem("inputData");
  //   if (storedData) {
  //     todos.value = JSON.parse(storedData);
  //   }
  //   console.log("=====>", todos);
});
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
    font-family: "Jua", sans-serif;
  }
}
.add-task {
  display: flex;
  width: 500px;
  height: 30px;
}
.task-input {
  background-color: rgb(255, 255, 255, 0);
  width: 100%;
  border: none;
  color: #727272;
  outline: none;
  font-family: "Jua", sans-serif;
  border-bottom: 1px solid gray;
}

.icon-container {
  display: inline-block;
  position: relative;
  margin-left: 10px;
  top: -2px;
}
</style>
