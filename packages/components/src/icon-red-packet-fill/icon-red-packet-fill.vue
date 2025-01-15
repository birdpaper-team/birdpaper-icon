<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.005 5.94a11.985 11.985 0 0 1-6.806 3.863 2.5 2.5 0 0 0-4.388 0A11.985 11.985 0 0 1 3.005 5.94V3.003a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V5.94Zm0 2.787v12.276a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V8.727a13.945 13.945 0 0 0 6.63 3.076 2.501 2.501 0 0 0 4.739 0 13.945 13.945 0 0 0 6.63-3.076Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRedPacketFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-red-packet-fill`, { [`${name}-spin`]: props.spin }]);

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

