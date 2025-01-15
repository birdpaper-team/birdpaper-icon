<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8h-3.47ZM12 10h6.091l1.538 9H4.372l1.539-9H12Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWeightLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-weight-line`, { [`${name}-spin`]: props.spin }]);

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

