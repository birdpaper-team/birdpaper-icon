<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.526 3.526a3.5 3.5 0 1 1 4.949 4.949l-.17.172a.5.5 0 0 0 0 .707l.17.172a3.5 3.5 0 0 1 0 4.949l-.17.172a.5.5 0 0 0 0 .707l.17.172a3.5 3.5 0 0 1-4.95 4.949l-.171-.17a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 0 1-4.95 0l-.171-.17a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 0 1-4.95-4.95l.172-.171a.5.5 0 0 0 0-.707l-.171-.172a3.5 3.5 0 0 1 0-4.95l.17-.171a.5.5 0 0 0 0-.707l-.17-.172a3.5 3.5 0 1 1 4.949-4.95l.172.172a.5.5 0 0 0 .707 0l.172-.171a3.5 3.5 0 0 1 4.949 0l.172.17a.5.5 0 0 0 .707 0l.172-.17ZM9.5 7.5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5Zm5 2v5h-5v-5h5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPaintingFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-painting-fill`, { [`${name}-spin`]: props.spin }]);

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

