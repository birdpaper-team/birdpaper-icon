<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.452 5.452 0 0 0 4.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.452 5.452 0 0 0 7.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801A5.452 5.452 0 0 0 19.2 18.93c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072a5.452 5.452 0 0 0-2.269-2.268C15.953 2.278 14.873 2 12.86 2ZM11 11V6h2v5h-2Zm-3.242 2.758 1.414-1.414 2.829 2.828 2.828-2.828 1.414 1.414-4.242 4.243-4.243-4.243Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconScrollToBottomFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-scroll-to-bottom-fill`, { [`${name}-spin`]: props.spin }]);

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

