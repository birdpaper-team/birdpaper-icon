<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m22.314 20.9-1.415 1.414-2.828-2.829 1.414-1.414 2.829 2.828ZM11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm.47 5.318a.507.507 0 0 0-.94 0l-.254.612a4.367 4.367 0 0 1-2.25 2.326l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.364 4.364 0 0 1 2.22 2.251l.245.565c.18.415.753.415.934 0l.247-.565a4.363 4.363 0 0 1 2.219-2.251l.76-.338a.53.53 0 0 0 0-.963l-.718-.32a4.367 4.367 0 0 1-2.251-2.325l-.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSearchAi4Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-search-ai4fill`, { [`${name}-spin`]: props.spin }]);

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

