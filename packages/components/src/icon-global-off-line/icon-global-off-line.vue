<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22.036 16.379 19.914 18.5l2.122 2.122-1.414 1.414-2.122-2.122-2.121 2.122-1.414-1.414 2.12-2.122-2.12-2.121 1.414-1.414 2.121 2.12 2.122-2.12 1.414 1.414ZM12.478 2.012C17.78 2.262 22 6.638 22 12v1H10.033a15.897 15.897 0 0 0 2.106 6.996c.082-.001.163-.001.245-.005.17-.008.339-.021.506-.04l.22 1.988a10.122 10.122 0 0 1-1.588.05C6.22 21.738 2 17.361 2 12c0-5.362 4.22-9.738 9.521-9.988a10.157 10.157 0 0 1 .957 0ZM4.065 13a8.006 8.006 0 0 0 5.649 6.668A17.901 17.901 0 0 1 8.03 13H4.064Zm5.649-8.669A8.007 8.007 0 0 0 4.064 11H8.03c.13-2.374.72-4.626 1.683-6.669ZM12 4.251A15.895 15.895 0 0 0 10.033 11h3.934A15.895 15.895 0 0 0 12 4.252Zm2.286.08A17.898 17.898 0 0 1 15.97 11h3.966a8.007 8.007 0 0 0-5.65-6.669Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGlobalOffLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-global-off-line`, { [`${name}-spin`]: props.spin }]);

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

