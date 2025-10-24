<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3.525 3.525a3.5 3.5 0 0 1 4.95 0l.171.171a.5.5 0 0 0 .707 0l.172-.17a3.5 3.5 0 0 1 3.893-.725A5.986 5.986 0 0 0 13 5c0 .892.195 1.738.545 2.499H9.5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4.046a5.98 5.98 0 0 0 4.699.128 3.5 3.5 0 0 1-.725 3.893l-.17.171a.5.5 0 0 0 0 .707l.17.172a3.5 3.5 0 0 1-4.949 4.95l-.172-.171a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 0 1-4.949 0l-.172-.17a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 0 1-4.949-4.949l.171-.171a.5.5 0 0 0 0-.707l-.17-.172a3.5 3.5 0 0 1 0-4.95l.17-.171a.5.5 0 0 0 0-.708l-.17-.171a3.5 3.5 0 0 1 0-4.95ZM14.5 14.5h-5v-5h5v5Zm4.029-13.18a.507.507 0 0 1 .941 0l.253.61a4.367 4.367 0 0 0 2.251 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.246-.565a4.364 4.364 0 0 0-2.219-2.251l-.76-.338a.53.53 0 0 1 0-.963l.717-.32a4.366 4.366 0 0 0 2.251-2.325l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPaintingAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-painting-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

