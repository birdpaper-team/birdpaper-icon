<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.775 2.778A9.973 9.973 0 0 0 4.94 4.961C3.06 6.845 2.04 9.405 2.024 12a9.86 9.86 0 0 0 .736 3.81C3.895 18.573 1.999 21.027.124 23l6.105-5.46a8 8 0 0 1 9.428-12.657l2.15-.995a8.68 8.68 0 0 0-2.032-1.11Zm5.921 6.955C20.71 5.482 21.636 3.274 23.9.1L8.59 15.472l9.61-6.666c.434-.32 1.055-.195 1.262.304A8 8 0 0 1 8.379 19.136l-3.183 1.009C6.833 21.313 9.836 22 12 22c5.523 0 10-4.477 10-10-.004-.764-.13-1.524-.304-2.267Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGrokAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-grok-ai-line`, { [`${name}-spin`]: props.spin }]);

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

