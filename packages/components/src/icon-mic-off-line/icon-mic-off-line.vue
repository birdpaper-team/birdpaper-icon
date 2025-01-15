<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m16.425 17.839 4.767 4.768 1.415-1.415-19.8-19.799-1.413 1.415L7 8.414V10a5 5 0 0 0 6.39 4.804l1.55 1.55A7.002 7.002 0 0 1 5.07 11H3.056A9.004 9.004 0 0 0 11 18.945V23h2v-4.055a8.941 8.941 0 0 0 3.425-1.106Zm-4.872-4.872a3.002 3.002 0 0 1-2.52-2.52l2.52 2.52Zm7.822 2.193-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.949 8.949 0 0 1-1.57 4.16Zm-2.91-2.909-1.548-1.548c.055-.226.083-.46.083-.703V6a3 3 0 0 0-5.818-1.032L7.686 3.471A5 5 0 0 1 17 6v4c0 .81-.192 1.575-.534 2.251Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMicOffLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mic-off-line`, { [`${name}-spin`]: props.spin }]);

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

