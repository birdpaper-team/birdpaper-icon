<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m14.311 12 4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.415-1.415 5.779-5.778v-.97L5.219 5.737l1.415-1.415 4.364 4.364V2h2l5.656 5.657L14.311 12Zm-1.313 1.515v5.657l2.828-2.829-2.828-2.828Zm0-3.03 2.828-2.828-2.828-2.829v5.657ZM19.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBluetoothConnectLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-bluetooth-connect-line`, { [`${name}-spin`]: props.spin }]);

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

