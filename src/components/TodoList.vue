<template>
  <ul class="list">
    <div class="list-box">
      <li class="list-item">
        <label class="list-item-label">
          <input type="checkbox" />
          <span>list item</span>
        </label>
        <span class="delete-btn"></span>
      </li>
    </div>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("");

const todoTextBox = () => {};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  height: 300px;
  background-color: rgb(255, 255, 255, 0.2);
  padding: 45px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0;

  .list-item {
    display: flex;
    background: white;
    flex-direction: row;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #e5e7e9;
    margin-bottom: 5px;
    .list-item-label {
      display: flex;
      align-items: flex-start;
      color: #272727;

      margin-left: 10px;
      font-size: 14px;
      line-height: 26px;
      position: relative;
      cursor: pointer;
      span {
        padding-left: 5px;
      }
    }
  }
}
.list-box {
  overflow-y: scroll;
}
.list-item input {
  width: 16px;
  height: 16px;
}
.list-item input:checked + span {
  color: gray;
  text-decoration: line-through gray;
}
// .list-item input:hover {
//   color: gray;
//   text-decoration: line-through gray;
// }
.delete-btn {
  margin-left: auto;
  margin-right: 5px;
  display: block;
  width: 16px;
  height: 16px;
}
</style>
