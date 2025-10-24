<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 2c4.968 0 9 4.032 9 9a8.961 8.961 0 0 1-1.969 5.617l4.283 4.282-1.415 1.415-4.282-4.283A8.961 8.961 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9Zm.47 5.318a.507.507 0 0 0-.94 0l-.254.612a4.367 4.367 0 0 1-2.25 2.326l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.364 4.364 0 0 1 2.22 2.251l.245.565c.18.415.753.415.934 0l.247-.565a4.363 4.363 0 0 1 2.219-2.251l.76-.338a.53.53 0 0 0 0-.963l-.718-.32a4.367 4.367 0 0 1-2.251-2.325l-.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSearchAi3Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-search-ai3fill`, { [`${name}-spin`]: props.spin }]);

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

