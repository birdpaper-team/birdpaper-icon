<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.5 4.783v2.888L22 9.114v5.773l-2.501 1.444.001 2.887-5 2.887-1.5-.867v-6.315l-3.964-2.29-1 1.733L11 16.077v5.16l-1.5.868-5-2.887V16.33L2 14.888l.001-5.775L4.5 7.67V4.784l5-2.887 1.5.867v6.313l3.965 2.29 1-1.733-2.966-1.712v-5.16l1.502-.866L19.5 4.783Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrain4Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brain4fill`, { [`${name}-spin`]: props.spin }]);

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

