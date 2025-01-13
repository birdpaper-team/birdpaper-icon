<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15 5.25A3.25 3.25 0 0 0 18.25 2h1.5A3.25 3.25 0 0 0 23 5.25v1.5A3.25 3.25 0 0 0 19.75 10h-1.5A3.25 3.25 0 0 0 15 6.75v-1.5ZM4 7a2 2 0 0 1 2-2h7V3H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconAiGenerate",
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

