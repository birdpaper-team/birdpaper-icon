<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2a1 1 0 1 1 0 2 8 8 0 1 0 8 8 1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 4a1 1 0 1 1 0 2 4 4 0 1 0 4 4 1 1 0 1 1 2 0 6 6 0 1 1-6-6Zm6.571-3.9a.5.5 0 0 1 .5.5v1.83a.5.5 0 0 0 .5.499H21.4a.5.5 0 0 1 .5.5v.915l-1.888 1.888a2.002 2.002 0 0 1-1.414.586h-2l-3.89 3.889a1 1 0 0 1-1.414-1.414l3.89-3.889v-2a2 2 0 0 1 .585-1.414l1.89-1.89h.913Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTargetFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-target-fill`, { [`${name}-spin`]: props.spin }]);

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

