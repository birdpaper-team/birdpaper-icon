<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4 14.745a7 7 0 1 1 8 0V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6.255ZM8 14A5 5 0 1 0 8 4a5 5 0 0 0 0 10Zm-1 4v2h2v-2H7Zm1-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6 5v-1.292A8.978 8.978 0 0 0 17 9a8.967 8.967 0 0 0-2.292-6H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7Zm4-10v2h2V7h-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDvFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-dv-fill`, { [`${name}-spin`]: props.spin }]);

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

