<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12 8.5 2.116 5.088 5.492.44-4.184 3.585 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5Zm0 5.207-.739 1.776-1.916.154 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.46-1.252-1.916-.154L12 13.707ZM8 2v9H6V2h2Zm10 0v9h-2V2h2Zm-5 0v5h-2V2h2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMedal2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-medal2line`, { [`${name}-spin`]: props.spin }]);

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

