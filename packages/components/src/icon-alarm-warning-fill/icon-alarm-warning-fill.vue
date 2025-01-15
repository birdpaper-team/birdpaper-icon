<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2h1Zm2-6h2a4 4 0 0 1 4-4V8a6 6 0 0 0-6 6Zm5-12h2v3h-2V2Zm8.778 2.808 1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121ZM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAlarmWarningFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-alarm-warning-fill`, { [`${name}-spin`]: props.spin }]);

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

