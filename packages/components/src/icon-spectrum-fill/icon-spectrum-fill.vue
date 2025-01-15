<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13.2 2.006C21.24 2.093 22 3.25 22 12l-.005 1.2C21.908 21.24 20.75 22 12 22l-1.2-.006c-7.658-.083-8.712-1.136-8.794-8.795L2 11.691l.006-.89c.085-7.85 1.19-8.76 9.381-8.8l1.812.005ZM8.25 7h-.583a.667.667 0 0 0-.66.568l-.006.099v3.666c0 .335.246.612.568.66l.098.007h.584a3.75 3.75 0 0 1 3.744 3.55l.006.2v.583c0 .335.246.612.568.66l.098.007h3.667a.667.667 0 0 0 .66-.568l.007-.099v-.583a8.75 8.75 0 0 0-8.492-8.746L8.25 7Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSpectrumFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-spectrum-fill`, { [`${name}-spin`]: props.spin }]);

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

