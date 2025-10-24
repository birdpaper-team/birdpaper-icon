<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m22.314 20.9-1.415 1.413-2.828-2.828 1.414-1.414 2.829 2.828ZM11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 2c-3.867 0-7 3.132-7 7 0 3.867 3.133 7 7 7s7-3.133 7-7c0-3.868-3.133-7-7-7Zm-.47 3.32a.506.506 0 0 1 .94 0l.254.61a4.367 4.367 0 0 0 2.25 2.327l.718.318c.41.183.41.781 0 .964l-.76.338a4.362 4.362 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.246-.565a4.364 4.364 0 0 0-2.22-2.251l-.76-.338a.531.531 0 0 1 0-.964l.718-.318a4.366 4.366 0 0 0 2.251-2.327l.253-.61Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSearchAi4Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-search-ai4line`, { [`${name}-spin`]: props.spin }]);

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

