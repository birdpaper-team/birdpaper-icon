<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17.656 2.1a1 1 0 0 1 1.415 0L21.9 4.93a1 1 0 0 1 0 1.414l-3.672 3.67c.861 1.12 1.543 2.237 2 3.273.38.867.627 1.726.66 2.512.033.786-.149 1.606-.755 2.213-.813.813-1.992.864-3.041.65-1.085-.223-2.303-.776-3.528-1.55l1.07-1.691c1.106.7 2.093 1.124 2.86 1.281.801.165 1.122-.001 1.225-.104.077-.077.19-.266.17-.715-.018-.45-.17-1.057-.493-1.79-.356-.81-.896-1.716-1.594-2.652l-1.973 1.974a1 1 0 0 1-.707.293h-2.828a1 1 0 0 1-1-1V9.879a1 1 0 0 1 .293-.707l1.856-1.859c-.958-.564-1.93-.942-2.846-1.125-1.709-.342-3.099 0-3.96.862-.862.861-1.204 2.252-.863 3.96.34 1.701 1.347 3.595 2.984 5.232C9.515 18 11.565 19.03 13.352 19.29l-.289 1.979c-2.279-.334-4.708-1.6-6.72-3.612-1.878-1.877-3.103-4.116-3.53-6.255-.426-2.13-.073-4.285 1.409-5.766C5.703 4.154 7.858 3.8 9.988 4.226c1.3.26 2.637.817 3.908 1.634l3.76-3.76Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDrawFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-draw-fill`, { [`${name}-spin`]: props.spin }]);

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

