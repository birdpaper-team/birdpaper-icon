<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.5 9c1 1.06 1.5 2.394 1.5 4 0 3.466-3.7 4.276-5.5 9-.667-.575-1-1.408-1-2.5 0-3.482 5-5.29 5-10.5Zm-4-4c1.2 1.238 1.8 2.572 1.8 4 0 4.951-6.045 5.692-4.8 13C9.833 20.84 9 19.173 9 17c0-3.325 5.5-6 5.5-12ZM10 1c1.333 1.667 2 3.167 2 4.5 0 6.25-8.5 8.222-4 16.5-2.616-.58-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBlazeFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-blaze-fill`, { [`${name}-spin`]: props.spin }]);

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

