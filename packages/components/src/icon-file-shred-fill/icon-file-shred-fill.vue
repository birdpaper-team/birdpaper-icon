<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22 12v2H2v-2h2V2.995c0-.55.445-.995.996-.995H15l5 5v5h2ZM3 16h2v6H3v-6Zm16 0h2v6h-2v-6Zm-4 0h2v6h-2v-6Zm-4 0h2v6h-2v-6Zm-4 0h2v6H7v-6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconFileShredFill",
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

