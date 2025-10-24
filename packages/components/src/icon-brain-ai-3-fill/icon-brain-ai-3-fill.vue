<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.5 4.783v2.888L22 9.114v5.773l-2.501 1.444.001 2.887-5 2.887L12 20.66l-2.5 1.444-5-2.887V16.33L2 14.888l.001-5.775L4.5 7.67V4.784l5-2.887 2.499 1.444 2.502-1.445L19.5 4.783Zm-4.765 8.377a.253.253 0 0 0-.47 0l-.127.305a2.183 2.183 0 0 1-1.125 1.163l-.359.16a.265.265 0 0 0 0 .48l.38.17c.494.22.89.62 1.11 1.124l.123.283c.09.207.376.207.466 0l.123-.282c.22-.504.616-.906 1.11-1.125l.38-.17a.265.265 0 0 0 0-.48l-.359-.16a2.184 2.184 0 0 1-1.126-1.163l-.126-.305Zm-4.323-5.38a.444.444 0 0 0-.824 0l-.222.534a3.82 3.82 0 0 1-1.969 2.037l-.627.279a.464.464 0 0 0 0 .843l.665.295a3.819 3.819 0 0 1 1.941 1.97l.216.494a.442.442 0 0 0 .816 0l.216-.495a3.819 3.819 0 0 1 1.941-1.97l.665-.294a.464.464 0 0 0 0-.843l-.628-.28a3.823 3.823 0 0 1-1.97-2.036l-.22-.535Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrainAi3Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brain-ai3fill`, { [`${name}-spin`]: props.spin }]);

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

