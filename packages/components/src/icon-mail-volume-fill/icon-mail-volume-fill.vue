<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20 14.5v9L16.667 21H14v-4h2.667L20 14.5ZM21 3a1 1 0 0 1 1 1v10.529A6 6 0 0 0 12.34 21L3.002 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18Zm0 14a2 2 0 0 1 .15 3.994L21 21v-4ZM5.647 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.286 5.438-6.413-5.444Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMailVolumeFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mail-volume-fill`, { [`${name}-spin`]: props.spin }]);

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

