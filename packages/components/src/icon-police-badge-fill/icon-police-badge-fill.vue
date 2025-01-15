<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2.913 11.674C3.236 10.195 3.54 8.808 2 6.5l3.5-4S9 4 12 1.5c3 2.5 6.5 1 6.5 1l3.5 4c-1.539 2.308-1.236 3.695-.913 5.174.306 1.404.63 2.89-.587 5.326-1.157 2.315-3.152 3.123-5.015 3.877-1.356.55-2.642 1.07-3.485 2.123-.842-1.053-2.129-1.574-3.485-2.123C6.652 20.123 4.658 19.315 3.5 17c-1.218-2.435-.893-3.922-.587-5.326Zm11.465 1.099 2.377-2.318-3.286-.478L12 7 10.53 9.977l-3.285.478 2.377 2.318-.561 3.272L12 14.5l2.939 1.545-.561-3.273Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPoliceBadgeFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-police-badge-fill`, { [`${name}-spin`]: props.spin }]);

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

