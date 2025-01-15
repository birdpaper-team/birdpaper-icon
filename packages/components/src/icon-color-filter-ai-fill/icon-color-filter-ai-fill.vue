<template>
  <svg viewBox="0 0 25 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.511 7.3c.385.168.77.335 1.152.506-.028.075-.059.149-.091.221a6.994 6.994 0 0 0-5.102 2.945 5 5 0 1 1 4.217-8.35C14.705 3.053 14 3.897 14 5c0 .994.601 1.904 1.511 2.3Zm-2.357 10.646a6.995 6.995 0 0 0 0-5.89 5 5 0 1 1 0 5.89Zm-6.88-7.92a6.995 6.995 0 0 0 5.1 2.947 5 5 0 1 1-5.1-2.946Zm10.602-4.313-.565-.246a.506.506 0 0 1 0-.934l.565-.246a4.363 4.363 0 0 0 2.251-2.22l.338-.759a.53.53 0 0 1 .963 0l.32.717a4.366 4.366 0 0 0 2.326 2.251l.61.253a.506.506 0 0 1 0 .942l-.61.253a4.366 4.366 0 0 0-2.327 2.25l-.319.718a.53.53 0 0 1-.963 0l-.338-.76a4.363 4.363 0 0 0-2.25-2.219Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconColorFilterAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-color-filter-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

