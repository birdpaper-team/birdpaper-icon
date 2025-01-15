<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM17 7a5 5 0 0 1 0 10c-1.844 0-3.51-1.04-5-3.121C10.51 15.959 8.844 17 7 17A5 5 0 0 1 7 7c1.844 0 3.51 1.04 5 3.121C13.49 8.041 15.156 7 17 7Zm-5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconHaze2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-haze2fill`, { [`${name}-spin`]: props.spin }]);

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

