<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 1a6 6 0 0 0-6 6v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9.044A6 6 0 0 1 21 14.044V9a1 1 0 0 0-1-1h-2V7a6 6 0 0 0-6-6Zm4 7H8V7a4 4 0 1 1 8 0v1Zm5.145 15.14-.505-2.945 2.14-2.086-2.957-.43L18.5 15l-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L18.5 21.75l2.645 1.39Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLockStarFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-lock-star-fill`, { [`${name}-spin`]: props.spin }]);

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

