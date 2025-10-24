<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12.923 2-2.088 3.616 2.598 1.5-1.75 3.031 1.732 1 2.75-4.763-2.598-1.5L15.232 2h2.636l1.122 7.859c.302 2.114-.521 3.93-1.88 5.188-1.105 1.022-2.569 1.685-4.11 1.887V20h5v2H6v-2h5v-3.066c-1.54-.202-3.004-.865-4.109-1.888-1.359-1.257-2.183-3.073-1.88-5.187L6.133 2h6.79Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGobletBrokenFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-goblet-broken-fill`, { [`${name}-spin`]: props.spin }]);

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

