<template>
  <i :type="type"></i>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "setting",
  },
  color: {
    type: String,
    default: null,
  },
});
</script>

<style scoped lang="scss">
i {
  &[type="delete"] {
    -webkit-mask-image: url(@/assets/icons/iconDelete.svg);
    mask-image: url(@/assets/icons/iconDelete.svg);
  }
}
</style>
