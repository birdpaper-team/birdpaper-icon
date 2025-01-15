<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m19.561 12.098 1.532 2.652A3.5 3.5 0 0 1 18.06 20H16v2l-5-3.5 5-3.5v2h2.062a.5.5 0 0 0 .471-.668l-.038-.082-1.53-2.652 2.597-1.5ZM7.736 9.384l.531 6.08-1.731-1-1.032 1.786a.5.5 0 0 0 .343.742l.09.008H9v3H5.937a3.5 3.5 0 0 1-3.031-5.25l1.032-1.786-1.733-1 5.531-2.58ZM13.75 2.97A3.5 3.5 0 0 1 15.03 4.25l1.031 1.786 1.733-1-.532 6.08-5.53-2.58 1.73-1-1.03-1.786a.5.5 0 0 0-.814-.074l-.052.074-1.53 2.652-2.598-1.5 1.53-2.652A3.5 3.5 0 0 1 13.75 2.97Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRecycleFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-recycle-fill`, { [`${name}-spin`]: props.spin }]);

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

