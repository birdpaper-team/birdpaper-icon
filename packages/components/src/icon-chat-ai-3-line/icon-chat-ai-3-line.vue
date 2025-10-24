<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c.863 0 1.701.11 2.5.315L14 4.252A8 8 0 0 0 4 12c0 1.334.325 2.617.94 3.766l.35.653-.656 2.947 2.947-.655.653.35A7.955 7.955 0 0 0 12 20a8 8 0 0 0 7.943-8.954l1.987-.236c.046.39.07.787.07 1.19 0 5.523-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176L2 22l1.176-5.291A9.957 9.957 0 0 1 2 12C2 6.477 6.477 2 12 2Zm7.53-.68a.507.507 0 0 1 .94 0l.254.61a4.366 4.366 0 0 0 2.25 2.327l.717.32a.53.53 0 0 1 0 .962l-.758.338a4.363 4.363 0 0 0-2.22 2.25l-.246.566a.506.506 0 0 1-.934 0l-.247-.565a4.363 4.363 0 0 0-2.219-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.367 4.367 0 0 0 2.251-2.325l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconChatAi3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-chat-ai3line`, { [`${name}-spin`]: props.spin }]);

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

