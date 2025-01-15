<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m14.368 4.398-3.484 6.035 1.732 1 3.485-6.035c4.169 2.772 6.305 7.08 4.56 10.102-1.86 3.222-7.19 3.355-11.91.63C4.028 13.402 1.48 8.721 3.34 5.5c1.745-3.023 6.543-3.327 11.028-1.102Zm1.516-2.625 1.732 1-1.5 2.598-1.732-1 1.5-2.598ZM6.732 20H17v2H5.018a.998.998 0 0 1-1.015-.922.995.995 0 0 1 .131-.578l2.25-3.897 1.732 1L6.732 20Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRadarFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-radar-fill`, { [`${name}-spin`]: props.spin }]);

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

