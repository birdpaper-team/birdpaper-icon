<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m2 22 5.291-1.176A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.703.425 3.306 1.176 4.709L2 22ZM15.449 7l-.175 2H17v2h-1.901l-.175 2H17v2h-2.251l-.175 2h-2.008l.175-2h-2.008l-.175 2H8.552l.175-2H7v-2h1.9l.176-2H7V9h2.25l.176-2h2.007l-.175 2h2.008l.175-2h2.008Zm-4.366 4-.175 2h2.008l.175-2h-2.008Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconChatThreadFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-chat-thread-fill`, { [`${name}-spin`]: props.spin }]);

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

