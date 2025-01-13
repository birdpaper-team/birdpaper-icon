<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 4V2h2v2h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6v2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4v2h-2v-2H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4v-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6ZM8 15v3h8v-3H8ZM6 9h12V6H6v3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconAlignItemHorizontalCenterLine",
});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  rotate: { type: Number },
  spin: { type: Boolean },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-zcool-line`, { [`${name}-spin`]: props.spin }]);

const innerStyle = computed(() => {
  const styles: CSSProperties = {};
  props.size && (styles.width = props.size);
  props.size && (styles.height = props.size);
  props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);

  return styles;
});

const onClick = (ev: MouseEvent) => emits("click", ev);
</script>

