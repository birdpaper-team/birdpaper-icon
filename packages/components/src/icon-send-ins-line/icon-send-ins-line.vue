<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.5 2a3.5 3.5 0 0 1 3.031 5.25l-7.5 12.99a3.5 3.5 0 0 1-6.41-.842l-1.768-6.594-4.828-4.83A3.5 3.5 0 0 1 4.5 2h15Zm-15 2a1.5 1.5 0 0 0-1.06 2.56l4.474 4.475 6.977-4.028a1 1 0 0 1 1 1.732l-6.977 4.029 1.638 6.11a1.5 1.5 0 0 0 2.747.361l7.5-12.989A1.5 1.5 0 0 0 19.5 4H4.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSendInsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-send-ins-line`, { [`${name}-spin`]: props.spin }]);

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

