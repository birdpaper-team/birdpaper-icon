<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.204 2.399a9.975 9.975 0 0 1 7.796.94 9.975 9.975 0 0 1 4.712 6.282A9.97 9.97 0 0 1 20.66 17a9.97 9.97 0 0 1-5.865 4.601A9.975 9.975 0 0 1 7 20.66a9.974 9.974 0 0 1-4.712-6.28A9.972 9.972 0 0 1 3.339 7a9.97 9.97 0 0 1 5.865-4.601Zm6.795 2.673a7.964 7.964 0 0 0-5.355-.956 9.96 9.96 0 0 1-1.242 6.383 9.959 9.959 0 0 1-4.907 4.267 7.963 7.963 0 0 0 3.504 4.162 7.962 7.962 0 0 0 5.356.954 9.96 9.96 0 0 1 1.243-6.383 9.96 9.96 0 0 1 4.906-4.267A7.963 7.963 0 0 0 16 5.072Zm3.962 6.138a7.961 7.961 0 0 0-3.631 3.29 7.961 7.961 0 0 0-1.034 4.789 7.961 7.961 0 0 0 3.632-3.29 7.961 7.961 0 0 0 1.033-4.79ZM8.703 4.71A7.96 7.96 0 0 0 5.072 8a7.96 7.96 0 0 0-1.033 4.789 7.96 7.96 0 0 0 3.63-3.29 7.96 7.96 0 0 0 1.034-4.79Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBaseballLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-baseball-line`, { [`${name}-spin`]: props.spin }]);

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

