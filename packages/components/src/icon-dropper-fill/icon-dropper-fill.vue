<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.536 2.807a4 4 0 0 1 5.656 5.657l-2.828 2.829.354.354a1 1 0 0 1-1.415 1.414l-.353-.354-6.215 6.215a4 4 0 0 1-2.044 1.094l-1.754.35a2 2 0 0 0-1.022.548l-.986.986a1 1 0 0 1-1.414 0L2.1 20.485a1 1 0 0 1 0-1.414l.986-.986a2 2 0 0 0 .546-1.022l.351-1.754a4 4 0 0 1 1.094-2.044l6.215-6.215-.354-.353a1 1 0 0 1 1.415-1.414l.353.353 2.829-2.829Zm-2.829 5.658-6.215 6.214a2 2 0 0 0-.547 1.022l-.35 1.755A4 4 0 0 1 4.5 19.5a4 4 0 0 1 2.044-1.094l1.754-.351a2 2 0 0 0 1.022-.547l6.215-6.215-2.829-2.828Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDropperFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-dropper-fill`, { [`${name}-spin`]: props.spin }]);

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

