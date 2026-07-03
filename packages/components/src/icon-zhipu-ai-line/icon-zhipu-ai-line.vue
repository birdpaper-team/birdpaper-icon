<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.531 3.015A2.75 2.75 0 0 1 21 5.75v12.5l-.015.281A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75a2.75 2.75 0 0 1 2.469-2.735L5.75 3h12.5l.281.015ZM5.75 5a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V5.75a.75.75 0 0 0-.75-.75H5.75Zm5.013 12.268H5.809L13.24 6.739h4.954l-7.431 10.529Zm7.119 0h-6.194l.873-1.239a.732.732 0 0 1 .6-.312h4.72v1.55ZM12.314 6.739l-.865 1.233a.733.733 0 0 1-.6.312H6.122v-1.55c.012.006 6.185.005 6.194.005Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconZhipuAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-zhipu-ai-line`, { [`${name}-spin`]: props.spin }]);

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

