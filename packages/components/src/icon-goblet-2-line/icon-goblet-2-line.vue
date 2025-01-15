<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6.133 2 5.011 9.859c-.303 2.114.521 3.93 1.88 5.188 1.105 1.022 2.568 1.685 4.11 1.887V20H6v2h12v-2h-5v-3.066c1.54-.202 3.004-.865 4.109-1.888 1.359-1.257 2.182-3.073 1.88-5.187L17.868 2H6.133Zm.857 8.141L7.868 4h8.265l.878 6.141c.198 1.386-.322 2.57-1.26 3.438-.954.883-2.333 1.421-3.75 1.421-1.418 0-2.797-.538-3.752-1.421-.937-.868-1.457-2.052-1.259-3.438Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGoblet2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-goblet2line`, { [`${name}-spin`]: props.spin }]);

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

