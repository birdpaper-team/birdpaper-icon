<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.111 12a4.502 4.502 0 0 0 8.777 0H22v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h9.111ZM5 16h2v2H5v-2Zm10.5-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM11.111 10H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2.111a4.502 4.502 0 0 0-8.777 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconProjectorFill",
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

