<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.001 3v18h-4.4a4.6 4.6 0 0 1-4.6-4.6V7.6a4.6 4.6 0 0 1 4.6-4.6h4.4Zm-2 2h-2.4a2.6 2.6 0 0 0-2.6 2.6v8.8a2.6 2.6 0 0 0 2.6 2.6h2.4V5Zm-2.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6.5-7h2.4a4.6 4.6 0 0 1 4.6 4.6v8.8a4.6 4.6 0 0 1-4.6 4.6h-2.4V3Zm3 11.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSwitchLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-switch-line`, { [`${name}-spin`]: props.spin }]);

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

