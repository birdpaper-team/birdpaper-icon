<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m14.829 7.757-5.657 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 0 0 12 4.929l-5.657 5.657a5 5 0 0 0 7.071 7.07L19.071 12l1.414 1.414-5.656 5.657a7 7 0 0 1-9.9-9.9l5.657-5.656a5 5 0 0 1 7.071 7.07L12 16.244A3 3 0 0 1 7.758 12l5.656-5.657 1.415 1.414Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAttachment2"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-attachment2`, { [`${name}-spin`]: props.spin }]);

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

