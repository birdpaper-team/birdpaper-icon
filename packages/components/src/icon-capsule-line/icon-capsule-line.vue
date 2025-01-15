<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.779 4.222a6 6 0 0 1 0 8.485l-7.072 7.071a6 6 0 0 1-8.485-8.485l7.071-7.071a6 6 0 0 1 8.486 0Zm-5.657 11.313L8.466 9.878l-2.83 2.83a4 4 0 0 0 5.657 5.656l2.83-2.83Zm4.242-9.899a4 4 0 0 0-5.657 0L9.88 8.464l5.657 5.657 2.827-2.828a4 4 0 0 0 0-5.657Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCapsuleLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-capsule-line`, { [`${name}-spin`]: props.spin }]);

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

