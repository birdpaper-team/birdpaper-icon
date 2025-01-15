<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm3 17a3 3 0 0 1 4.293-2.708l-4 4.001A2.988 2.988 0 0 1 15 18Zm1.707 2.708 4-4.001a3 3 0 0 1-4.001 4.001ZM18 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-6 1c.084 0 .168.001.252.004a6.97 6.97 0 0 0-.975 2.04A6.001 6.001 0 0 0 6 22H4a8 8 0 0 1 8-8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconUserForbidLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-user-forbid-line`, { [`${name}-spin`]: props.spin }]);

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

