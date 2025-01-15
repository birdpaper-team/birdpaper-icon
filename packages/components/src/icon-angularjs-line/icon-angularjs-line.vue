<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.523 16.65.49-.27 1.118-9.71-7.13-2.546-7.132 2.545 1.119 9.71.474.263L12 4.21l5.523 12.44Zm-1.098.61h-.799l-1.168-2.92H9.523l-1.169 2.92h-.778L12 19.713l4.425-2.453ZM12 2l9.3 3.32-1.418 12.31L12 22 4.12 17.63 2.7 5.32 12 2Zm1.698 10.54L12 8.45l-1.698 4.09h3.396Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAngularjsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-angularjs-line`, { [`${name}-spin`]: props.spin }]);

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

