<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13Zm0-2a10.005 10.005 0 0 1 8.402-8.881 17.9 17.9 0 0 0-2.925 8.88H2.05Zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881 10.005 10.005 0 0 1 8.403 8.88Zm0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13h5.478ZM9.53 13h4.94A15.908 15.908 0 0 1 12 20.59 15.908 15.908 0 0 1 9.53 13Zm0-2A15.908 15.908 0 0 1 12 3.408 15.908 15.908 0 0 1 14.47 11H9.53Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGlobalFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-global-fill`, { [`${name}-spin`]: props.spin }]);

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

