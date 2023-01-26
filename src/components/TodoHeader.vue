<template>
  <div class="header">
    <h1 class="title">Todo List</h1>
    <div class="add-task">
      <input type="text" class="task-input" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const test = ref("");
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
</style>
