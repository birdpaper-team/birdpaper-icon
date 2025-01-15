<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m16.701 6.8-6.114 3.786L6.802 16.7l-.104-.104-1.415 1.414.708.707 1.414-1.414L7.3 17.2l6.114-3.785L17.2 7.3l.104.104L18.72 5.99l-.708-.708-1.414 1.415.104.104Zm-4.7 15.2c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm-.5-19v2h1V3h-1Zm0 16v2h1v-2h-1ZM8.095 3.876l.765 1.848.924-.383-.765-1.847-.924.382Zm6.123 14.783.765 1.847.924-.382-.765-1.848-.924.383Zm.765-15.165-.765 1.847.924.383.765-1.848-.924-.382ZM8.86 18.276l-.765 1.848.924.382.765-1.848-.924-.382ZM21.001 11.5h-2v1h2v-1Zm-16 0h-2v1h2v-1Zm15.458 3.616-1.835-.795-.397.918 1.835.794.397-.918ZM5.775 8.76 3.94 7.967l-.397.918 1.835.794.397-.918Zm14.35-.667-1.848.765.383.924 1.847-.765-.383-.924ZM5.342 14.217l-1.847.765.382.924 1.848-.765-.383-.924ZM18.72 18.01l-1.415-1.414-.707.707 1.414 1.415.707-.708ZM7.404 6.697 5.99 5.282l-.708.708 1.415 1.414.707-.707Zm3.908 4.615 3.611-2.235-2.235 3.61-1.376-1.375Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSafariFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-safari-fill`, { [`${name}-spin`]: props.spin }]);

const innerStyle = computed(() => {
  const styles: CSSProperties = {
    width: props.size,
    height: props.size,
    transform: props.rotate ? `rotate(${props.rotate}deg)` : undefined,
  };

  return styles;
});

const onClick = (ev: MouseEvent) => emits("click", ev);
</script>

