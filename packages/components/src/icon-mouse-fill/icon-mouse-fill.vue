<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.141 2h1.718c2.014 0 3.094.278 4.071.801A5.452 5.452 0 0 1 19.2 5.07c.522.978.801 2.058.801 4.072v5.718c0 2.014-.279 3.094-.801 4.071A5.452 5.452 0 0 1 16.93 21.2c-.977.522-2.057.801-4.071.801H11.14c-2.014 0-3.094-.279-4.072-.801a5.452 5.452 0 0 1-2.268-2.269C4.278 17.953 4 16.873 4 14.86V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2ZM11 6v5h2V6h-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMouseFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mouse-fill`, { [`${name}-spin`]: props.spin }]);

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

