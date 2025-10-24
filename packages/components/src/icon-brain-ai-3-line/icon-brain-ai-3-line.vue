<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.5 4.783v2.888L22 9.114v5.773l-2.501 1.444.001 2.887-5 2.887L12 20.66l-2.5 1.444-5-2.887V16.33L2 14.888l.001-5.775L4.5 7.67V4.784l5-2.887 2.499 1.444 2.502-1.445L19.5 4.783Zm-6.5.29V7h-2V5.073l-1.5-.866-3.001 1.731v2.887L4 10.268v3.465l2.5 1.444v2.887l3 1.732 1.5-.867V17h2v1.93l1.5.866 3-1.733v-2.886l2.5-1.445V10.27l-2.501-1.445.001-2.887-2.999-1.732L13 5.072Zm1.265 8.087a.253.253 0 0 1 .47 0l.127.305c.216.521.619.938 1.125 1.163l.359.16a.265.265 0 0 1 0 .48l-.38.17c-.494.22-.89.62-1.11 1.124l-.123.283a.253.253 0 0 1-.466 0l-.123-.282a2.182 2.182 0 0 0-1.11-1.125l-.38-.17a.265.265 0 0 1 0-.48l.359-.16a2.183 2.183 0 0 0 1.125-1.163l.127-.305ZM9.588 7.78a.444.444 0 0 1 .824 0l.222.534a3.82 3.82 0 0 0 1.968 2.037l.628.278c.36.16.36.683 0 .843l-.665.296a3.818 3.818 0 0 0-1.941 1.97l-.216.494a.442.442 0 0 1-.816 0l-.216-.495a3.818 3.818 0 0 0-1.941-1.97l-.665-.295a.464.464 0 0 1 0-.843l.627-.278a3.82 3.82 0 0 0 1.97-2.037l.22-.535Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrainAi3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brain-ai3line`, { [`${name}-spin`]: props.spin }]);

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

