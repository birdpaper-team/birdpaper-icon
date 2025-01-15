<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.475 1.768a3.5 3.5 0 0 0-4.95 0L5.4 5.894a3.99 3.99 0 0 1 3.079 1.164l2.992 2.993a.75.75 0 0 0 1.061 0l2.992-2.993a3.99 3.99 0 0 1 3.08-1.163l-4.128-4.127Zm5.979 5.978 1.779 1.78a3.5 3.5 0 0 1 .015 4.933l-1.774 1.774a3 3 0 0 1-4.243 0l-2.993-2.993a1.75 1.75 0 0 0-2.475 0L7.77 16.234a3 3 0 0 1-4.243 0l-1.78-1.78a3.5 3.5 0 0 1 .021-4.929l1.775-1.774a3 3 0 0 1 4.228.014l2.992 2.993a1.75 1.75 0 0 0 2.475 0l2.993-2.993a3 3 0 0 1 4.223-.019ZM5.398 18.105a3.99 3.99 0 0 0 3.079-1.164l2.993-2.994a.75.75 0 0 1 1.061 0l2.993 2.994a3.99 3.99 0 0 0 3.08 1.163l-4.129 4.128a3.5 3.5 0 0 1-4.95 0l-4.127-4.127Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPixFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-pix-fill`, { [`${name}-spin`]: props.spin }]);

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

