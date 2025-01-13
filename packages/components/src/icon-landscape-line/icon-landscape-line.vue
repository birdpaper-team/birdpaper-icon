<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.27 12.216 15 6l8 15H2L9 8l2.27 4.216Zm1.12 2.022L14.987 19h4.68l-4.77-8.942-2.507 4.18ZM5.348 19h7.304L9 12.219 5.348 19ZM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconLandscapeLine",
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

