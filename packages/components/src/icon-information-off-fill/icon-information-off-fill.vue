<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.743 18.329A9.958 9.958 0 0 0 22 12c0-5.523-4.477-10-10-10a9.959 9.959 0 0 0-6.329 2.257l6.243 6.243H13v1.086l6.743 6.743ZM10 11.414 4.257 5.671A9.959 9.959 0 0 0 2 12c0 5.523 4.477 10 10 10a9.958 9.958 0 0 0 6.329-2.257L14 15.414V17h-4v-2h1v-2.5h-1v-1.086ZM13.586 15H13v-.586l.586.586ZM13.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconInformationOffFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-information-off-fill`, { [`${name}-spin`]: props.spin }]);

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

