<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m10.13 15.842-.787 2.94-1.932-.517.787-2.94a10.988 10.988 0 0 1-3.237-1.871l-2.153 2.153-1.414-1.414 2.153-2.154a10.957 10.957 0 0 1-2.371-5.07l.9-.164A16.923 16.923 0 0 0 12 10c3.704 0 7.132-1.184 9.924-3.195l.9.163a10.958 10.958 0 0 1-2.37 5.071l2.153 2.154-1.414 1.414-2.154-2.153a10.989 10.989 0 0 1-3.237 1.872l.788 2.939-1.932.517-.788-2.94a11.078 11.078 0 0 1-3.74 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconEyeCloseFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-eye-close-fill`, { [`${name}-spin`]: props.spin }]);

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

