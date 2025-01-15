<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3h18a1 1 0 0 1 1 1v6h-3.126a4.002 4.002 0 0 0-7.748 0H2V4a1 1 0 0 1 1-1Zm-1 9v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8h-3.126a4.002 4.002 0 0 1-7.748 0H2Zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9 6h2v2H6v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconProjectorFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-projector-fill`, { [`${name}-spin`]: props.spin }]);

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

