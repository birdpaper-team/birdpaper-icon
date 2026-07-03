<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.55 1.354a.905.905 0 0 1 .9 0l8.671 4.976a.753.753 0 0 1 .379.653v10.036l-.006.1a.753.753 0 0 1-.372.551l-8.672 4.978-.107.052a.906.906 0 0 1-.793-.052L2.879 17.67a.753.753 0 0 1-.372-.552l-.007-.1V6.984c0-.27.145-.518.379-.653l8.67-4.976ZM4.5 7.705v8.59l7.5 4.304v-8.294a.53.53 0 0 0-.266-.458L4.51 7.699l-.009.006Zm8.854 12.117 6.146-3.528V9.238l-6.146 10.584ZM5.86 6.924H18.14l-6.14-3.523-6.138 3.523Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCursorAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-cursor-ai-line`, { [`${name}-spin`]: props.spin }]);

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

