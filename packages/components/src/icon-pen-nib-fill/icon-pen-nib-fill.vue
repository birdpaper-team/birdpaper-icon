<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m4.929 21.482 5.846-5.846a2 2 0 1 0-1.414-1.414l-5.846 5.846-1.06-1.06c2.828-3.3 3.888-6.954 5.302-13.082l6.364-.708 5.657 5.657-.707 6.364c-6.128 1.415-9.782 2.475-13.081 5.304l-1.061-1.061ZM16.596 2.037l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.657.212-1.485a.5.5 0 0 1 .848-.282Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPenNibFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-pen-nib-fill`, { [`${name}-spin`]: props.spin }]);

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

