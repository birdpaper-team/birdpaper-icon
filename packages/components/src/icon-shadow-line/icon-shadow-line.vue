<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1H3Zm15 9.56 2 2v2.88l-2-2v-2.88Zm0-2.12V8h2v3.44l-2-2ZM18 17v-.44l2 2V20h-1.44l-2-2H17a1 1 0 0 0 1-1Zm-3.56 1 2 2h-2.88l-2-2h2.88Zm-5 0 2 2H8v-2h1.44ZM4 16V4h12v12H4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconShadowLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-shadow-line`, { [`${name}-spin`]: props.spin }]);

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

