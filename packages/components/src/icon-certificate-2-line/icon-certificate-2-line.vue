<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19 12a4 4 0 0 1 2.5 7.121V23.5L19 22l-2.5 1.5v-4.379A4 4 0 0 1 19 12Zm1-10a1 1 0 0 1 1 1v7h-2V4H5v16h8v2H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16Zm-1 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-6 1H8v-2h5v2Zm3-4H8V9h8v2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCertificate2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-certificate2line`, { [`${name}-spin`]: props.spin }]);

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

