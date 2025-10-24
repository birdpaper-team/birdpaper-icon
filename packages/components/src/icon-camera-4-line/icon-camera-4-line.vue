<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.434 3a2 2 0 0 1 1.714.97l.773 1.287a.5.5 0 0 0 .429.243H19a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.5a3 3 0 0 1 3-3h1.65a.5.5 0 0 0 .43-.243l.772-1.286A2 2 0 0 1 9.566 3h4.868Zm-5.64 3.286A2.501 2.501 0 0 1 6.65 7.5H5a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.5a1 1 0 0 0-1-1h-1.65c-.879 0-1.693-.46-2.145-1.214L14.434 5H9.566l-.771 1.286ZM12 8.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCamera4Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-camera4line`, { [`${name}-spin`]: props.spin }]);

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

