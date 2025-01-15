<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.822 9.729H18.73a1.113 1.113 0 0 1-1.093-1.094A5.636 5.636 0 0 0 12 3H8.636A5.636 5.636 0 0 0 3 8.635v6.73A5.636 5.636 0 0 0 8.636 21h6.729A5.636 5.636 0 0 0 21 15.364v-4.458a1.15 1.15 0 0 0-1.178-1.177ZM8.552 7.542h4.037c.589 0 1.093.504 1.093 1.093S13.178 9.73 12.59 9.73H8.55a1.113 1.113 0 0 1-1.093-1.094c0-.589.505-1.093 1.093-1.093Zm6.897 8.916H8.636a1.113 1.113 0 0 1-1.094-1.094c0-.589.505-1.093 1.094-1.093h6.813c.588 0 1.093.504 1.093 1.093s-.505 1.094-1.093 1.094Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBloggerFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-blogger-fill`, { [`${name}-spin`]: props.spin }]);

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

