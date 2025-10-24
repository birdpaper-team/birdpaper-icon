<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m22.314 20.9-1.415 1.413-2.828-2.828 1.414-1.414 2.829 2.828ZM11 2a9.1 9.1 0 0 1 .783.036 5.958 5.958 0 0 0-.699 1.966L11 4c-3.867 0-7 3.133-7 7s3.133 7 7 7 7-3.133 7-7l-.003-.085a5.955 5.955 0 0 0 1.966-.7c.022.26.037.52.037.785 0 4.968-4.032 9-9 9s-9-4.032-9-9 4.032-9 9-9Zm5.53-.68a.506.506 0 0 1 .94 0l.254.61a4.367 4.367 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.362 4.362 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.246-.565a4.364 4.364 0 0 0-2.22-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.366 4.366 0 0 0 2.251-2.325l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSearchAi2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-search-ai2line`, { [`${name}-spin`]: props.spin }]);

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

