<template>
  <i :type="type"></i>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "setting",
  },
  // color: {
  //   type: String,
  //   default: null,
  // },
});
</script>

<style scoped lang="scss">
i {
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  text-indent: -1000em;
  background: #dddddd;
  // -webkit-mask-image: url(@/assets/icons/iconSetting.svg);
  // mask-image: url(@/assets/icons/iconSetting.svg);
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: 50% 50%;
  -webkit-mask-position: 50% 50%;
  &[type="delete"] {
    -webkit-mask-image: url(@/assets/icons/iconDel.svg);
    mask-image: url(@/assets/icons/iconDel.svg);
  }
  &[type="plus"] {
    -webkit-mask-image: url(@/assets/icons/iconPlus.svg);
    mask-image: url(@/assets/icons/iconPlus.svg);
  }
}
</style>
