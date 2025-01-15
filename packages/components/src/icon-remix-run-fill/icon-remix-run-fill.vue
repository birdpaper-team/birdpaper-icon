<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.116 20c0-1.064 0-2.04-.162-4.119-.2-2.09-1.289-3.148-3.15-3.52 2.205-.286 3.837-2.004 3.837-4.637C19.64 4.204 17.32 2 12.656 2H4v3.669h7.797c2.061 0 3.092.884 3.092 2.344 0 1.66-1.03 2.287-3.092 2.287H4v3.75h7.568c1.632 0 2.52.457 2.662 2.518a24.74 24.74 0 0 1 .082 2.773v.003c-.004.214-.008.425-.008.656h4.812ZM4 17.205V20h6.122v-1.79c0-.375-.184-1.005-1.034-1.005H4Z" fill="#121212"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRemixRunFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-remix-run-fill`, { [`${name}-spin`]: props.spin }]);

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

