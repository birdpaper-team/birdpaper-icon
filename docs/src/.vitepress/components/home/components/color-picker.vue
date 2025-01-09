<template>
  <div class="color-picker">
    <input type="color" v-model="model" />
  </div>
</template>

<script lang="ts" setup>
const model = defineModel<string>({
  default: "#000000",
});
</script>

<style scoped>
.color-picker {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.color-preview {
  margin-top: 10px;
}
</style>
