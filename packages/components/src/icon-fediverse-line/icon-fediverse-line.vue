<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 11.5V8.232L8.17 9.866l-1-1.732L10 6.5 7.17 4.866l1-1.732L11 4.768V1.5h2v3.268l2.83-1.634 1 1.732L14 6.5l2.83 1.634-1 1.732L13 8.232V11.5h-2Zm10.46 1.384-2.83 1.634V11.25h-2v3.268l-2.83-1.634-1 1.732 2.83 1.634-2.83 1.634 1 1.732 2.83-1.634v3.268h2v-3.268l2.83 1.634 1-1.732-2.83-1.634 2.83-1.634-1-1.732ZM7.37 17.982v3.268h-2v-3.268l-2.83 1.634-1-1.732 2.83-1.634-2.83-1.634 1-1.732 2.83 1.633V11.25h2v3.268l2.83-1.633 1 1.732-2.83 1.634 2.83 1.634-1 1.732-2.83-1.634Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFediverseLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-fediverse-line`, { [`${name}-spin`]: props.spin }]);

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

