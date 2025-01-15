<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2Zm0 2a6.5 6.5 0 0 0-6.5 6.5c0 4.794 4.165 10 6.5 10s6.5-5.206 6.5-10A6.5 6.5 0 0 0 12 4Zm5.5 7c.16 0 .319.008.475.025a4.5 4.5 0 0 1-4.95 4.95A4.5 4.5 0 0 1 17.5 11Zm-11 0a4.5 4.5 0 0 1 4.475 4.975 4.5 4.5 0 0 1-4.95-4.95C6.18 11.008 6.34 11 6.5 11Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAliensLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-aliens-line`, { [`${name}-spin`]: props.spin }]);

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

