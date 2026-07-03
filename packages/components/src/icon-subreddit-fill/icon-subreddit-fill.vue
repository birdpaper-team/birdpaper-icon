<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2a9.95 9.95 0 0 1 5.41 1.59l-5.383 12.62H14.2l4.816-11.334A9.968 9.968 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm.188 5.788a2.83 2.83 0 0 0-1.457.372 3.436 3.436 0 0 0-1.053.945h-.04V7.912H7.556v8.299h2.138v-4.4c0-.408.095-.76.287-1.054a1.85 1.85 0 0 1 .724-.662 1.95 1.95 0 0 1 .888-.222h-.001c.13-.001.26.011.388.035.094.012.186.04.271.081l.86-2.053a1.833 1.833 0 0 0-.38-.101 3.022 3.022 0 0 0-.543-.047Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSubredditFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-subreddit-fill`, { [`${name}-spin`]: props.spin }]);

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

