<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.596 4 10.5 9.928 15.404 4H18l-6.202 7.497L18 18.994V19h-2.59l-4.91-5.934L5.59 19H3v-.006l6.202-7.497L3 4h2.596ZM21.8 16a.8.8 0 1 0-1.57.22l-1.154.33A2.001 2.001 0 1 1 23 16c0 .573-.24 1.09-.627 1.454L20.744 19H23v1h-4v-1l2.55-2.42a.798.798 0 0 0 .25-.58Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSubscript"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-subscript`, { [`${name}-spin`]: props.spin }]);

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

