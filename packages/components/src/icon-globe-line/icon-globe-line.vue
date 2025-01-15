<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13 21h5v2H6v-2h5v-1.05a10.002 10.002 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.993-1.737A9.996 9.996 0 0 1 22 10c0 5.185-3.946 9.449-9 9.95V21Zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGlobeLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-globe-line`, { [`${name}-spin`]: props.spin }]);

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

