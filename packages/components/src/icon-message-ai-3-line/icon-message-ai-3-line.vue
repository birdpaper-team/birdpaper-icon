<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16 3c3.313 0 6 2.695 6 5.994V21H8.001C4.687 21 2 18.305 2 15.006V11h2v4.006A4.005 4.005 0 0 0 8.001 19H20V8.994A4.005 4.005 0 0 0 16 5h-6V3h6Zm-6 10H8v-2h2v2Zm6 0h-2v-2h2v2ZM3.53 1.32a.507.507 0 0 1 .94 0l.254.61a4.367 4.367 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.247-.565a4.363 4.363 0 0 0-2.219-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.366 4.366 0 0 0 2.251-2.325l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMessageAi3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-message-ai3line`, { [`${name}-spin`]: props.spin }]);

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

