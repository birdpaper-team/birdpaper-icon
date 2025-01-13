<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15 10v11H3a1 1 0 0 1-1-1V10h13Zm7 0v10a1 1 0 0 1-1 1h-4V10h5Zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1h18Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconLayout6Fill",
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

