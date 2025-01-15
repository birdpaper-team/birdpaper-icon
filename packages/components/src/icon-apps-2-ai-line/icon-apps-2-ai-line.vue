<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm0 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm10 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm-3-10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.975-5.845.278-.636a4.908 4.908 0 0 1 2.496-2.533l.854-.38c.463-.205.463-.878 0-1.083l-.806-.359a4.911 4.911 0 0 1-2.533-2.617l-.285-.688a.57.57 0 0 0-1.058 0l-.285.688a4.911 4.911 0 0 1-2.533 2.617l-.806.359c-.463.205-.463.878 0 1.083l.854.38a4.908 4.908 0 0 1 2.496 2.533l.278.636a.57.57 0 0 0 1.05 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconApps2AiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-apps2ai-line`, { [`${name}-spin`]: props.spin }]);

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

