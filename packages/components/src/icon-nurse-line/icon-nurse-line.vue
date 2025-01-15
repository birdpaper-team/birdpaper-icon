<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 15a8.001 8.001 0 0 1 7.939 7H4.062a8.001 8.001 0 0 1 7.939-7Zm-1.813 2.28A6.022 6.022 0 0 0 6.803 20h5.199l-1.813-2.72Zm3.627 0L12.001 20h5.198a6.022 6.022 0 0 0-3.385-2.72ZM18.001 2v6A6 6 0 0 1 6 8V2h12ZM8 8a4 4 0 0 0 8 0H8Zm8-4H8v2h8V4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconNurseLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-nurse-line`, { [`${name}-spin`]: props.spin }]);

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

