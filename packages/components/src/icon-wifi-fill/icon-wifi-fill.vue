<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M.69 6.997A17.925 17.925 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997L21.425 9.33A14.938 14.938 0 0 0 12 6C8.43 6 5.15 7.248 2.575 9.33L.689 6.997Zm3.141 3.89A12.946 12.946 0 0 1 12 8c3.094 0 5.936 1.081 8.169 2.886l-1.886 2.334A9.958 9.958 0 0 0 12 11c-2.38 0-4.567.832-6.284 2.22l-1.885-2.334Zm3.142 3.89A7.966 7.966 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.885 2.334A4.979 4.979 0 0 0 12 16c-1.19 0-2.283.416-3.142 1.11l-1.885-2.334Zm3.142 3.89A2.988 2.988 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWifiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-wifi-fill`, { [`${name}-spin`]: props.spin }]);

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

