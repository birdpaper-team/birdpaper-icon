<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3.526 3.525a3.5 3.5 0 0 1 4.949 0l.172.171a.5.5 0 0 0 .707 0l.172-.17a3.5 3.5 0 0 1 4.687-.238l-1.265 1.548a1.5 1.5 0 0 0-2.008.103l-.172.172a2.5 2.5 0 0 1-3.535 0L7.06 4.94A1.5 1.5 0 0 0 4.94 7.061l.172.171a2.5 2.5 0 0 1 0 3.536l-.172.171a1.5 1.5 0 0 0 0 2.122l.172.171a2.5 2.5 0 0 1 0 3.536l-.172.171a1.5 1.5 0 1 0 2.12 2.122l.173-.172a2.5 2.5 0 0 1 3.535 0l.172.172a1.5 1.5 0 0 0 2.12 0l.173-.172a2.5 2.5 0 0 1 3.535 0l.172.172a1.5 1.5 0 0 0 2.12-2.122l-.171-.171a2.5 2.5 0 0 1 0-3.536l.172-.171c.549-.55.584-1.42.103-2.008l1.548-1.266a3.5 3.5 0 0 1-.237 4.688l-.171.171a.5.5 0 0 0 0 .707l.17.172a3.5 3.5 0 1 1-4.948 4.95l-.172-.171a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 0 1-4.95 0l-.171-.17a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 1 1-4.95-4.949l.172-.171a.5.5 0 0 0 0-.707l-.171-.172a3.5 3.5 0 0 1 0-4.95l.17-.171a.5.5 0 0 0 0-.708l-.17-.171a3.5 3.5 0 0 1 0-4.95ZM14.5 7.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5Zm-5 7h5v-5h-5v5Zm9.03-13.18a.507.507 0 0 1 .94 0l.254.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.25l-.246.566a.506.506 0 0 1-.934 0l-.247-.565a4.364 4.364 0 0 0-2.218-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.365 4.365 0 0 0 2.25-2.325l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPaintingAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-painting-ai-line`, { [`${name}-spin`]: props.spin }]);

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

