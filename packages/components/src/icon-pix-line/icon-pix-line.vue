<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m14.473 1.745 7.778 7.778a3.5 3.5 0 0 1 0 4.95l-7.778 7.778a3.5 3.5 0 0 1-4.95 0l-7.778-7.778a3.5 3.5 0 0 1 0-4.95l7.778-7.778a3.5 3.5 0 0 1 4.95 0Zm-2.475 13.082-2.475 2.475c-.38.38-.825.653-1.299.822l2.713 2.713a1.5 1.5 0 0 0 2.122 0l2.713-2.713a3.487 3.487 0 0 1-1.3-.822l-2.474-2.475Zm-6.01-6.719-2.829 2.83a1.5 1.5 0 0 0 0 2.12l2.829 2.83a1.5 1.5 0 0 0 2.12 0l2.476-2.476a2 2 0 0 1 2.828 0l2.475 2.475a1.5 1.5 0 0 0 2.121 0l2.829-2.828a1.5 1.5 0 0 0 0-2.121l-2.829-2.829a1.501 1.501 0 0 0-2.121 0l-2.475 2.475a2 2 0 0 1-2.828 0L8.109 8.109a1.5 1.5 0 0 0-2.12 0Zm4.95-4.949L8.223 5.872c.474.17.92.443 1.299.823l2.475 2.475 2.475-2.475c.38-.38.824-.654 1.299-.823L13.059 3.16a1.5 1.5 0 0 0-2.122 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPixLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-pix-line`, { [`${name}-spin`]: props.spin }]);

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

