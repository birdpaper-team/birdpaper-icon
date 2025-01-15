<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 6V2H7v4H4.5v2H7v5a4 4 0 0 0 6.667 2.981l-1.334-1.49A2 2 0 0 1 9 13V8h6.625L11.5 11.975V13.5h1c3.067 0 5 2.18 5 4 0 1.883-1.627 3.5-3.75 3.5-1.823 0-3.293-1.202-3.66-2.733l-1.945.466C8.74 21.21 11.051 23 13.75 23c3.124 0 5.75-2.412 5.75-5.5 0-2.565-2.034-4.932-4.914-5.722L19 7.525V6H9Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconXtzLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-xtz-line`, { [`${name}-spin`]: props.spin }]);

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

