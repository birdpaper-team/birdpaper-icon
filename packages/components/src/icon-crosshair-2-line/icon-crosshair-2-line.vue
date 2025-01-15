<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 5.07A7.005 7.005 0 0 0 5.07 11H7v2H5.07A7.004 7.004 0 0 0 11 18.93V17h2v1.93A7.004 7.004 0 0 0 18.93 13H17v-2h1.93A7.004 7.004 0 0 0 13 5.07V7h-2V5.07ZM3.055 11A9.004 9.004 0 0 1 11 3.055V1h2v2.055A9.004 9.004 0 0 1 20.945 11H23v2h-2.055A9.004 9.004 0 0 1 13 20.945V23h-2v-2.055A9.004 9.004 0 0 1 3.055 13H1v-2h2.055ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCrosshair2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-crosshair2line`, { [`${name}-spin`]: props.spin }]);

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

