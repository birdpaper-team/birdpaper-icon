<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h18ZM10.515 7.412C8.728 8.187 7.5 9.755 7.5 11.505c0 .995.277 1.609.792 2.155.324.345.837.59 1.374.59a1.75 1.75 0 0 0 1.75-1.75 1.76 1.76 0 0 0-1.614-1.745 2.104 2.104 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573l-.447-.688Zm5 0c-1.787.775-3.015 2.343-3.015 4.093 0 .995.277 1.609.792 2.155.324.345.837.59 1.374.59a1.75 1.75 0 0 0 1.75-1.75 1.76 1.76 0 0 0-1.614-1.745 2.104 2.104 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573l-.447-.688Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconChatQuoteFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-chat-quote-fill`, { [`${name}-spin`]: props.spin }]);

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

