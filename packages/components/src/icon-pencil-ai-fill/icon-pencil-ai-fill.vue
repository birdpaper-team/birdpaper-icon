<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.143 11.097-9.9 9.9H3v-4.243l9.9-9.9 4.243 4.243Zm-.707-7.779a1 1 0 0 1 1.414 0l2.828 2.83a1 1 0 0 1 0 1.413l-2.121 2.122-4.243-4.243 2.122-2.122ZM4.529 1.32a.507.507 0 0 1 .942 0l.253.612a4.367 4.367 0 0 0 2.25 2.326l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.247-.565a4.363 4.363 0 0 0-2.219-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.366 4.366 0 0 0 2.251-2.325l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPencilAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-pencil-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

