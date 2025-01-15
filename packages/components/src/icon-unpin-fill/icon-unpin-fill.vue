<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.971 17.172-1.414 1.414-3.535-3.535-.073.074-.707 3.535-1.415 1.415-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707.073-.074-3.536-3.536 1.414-1.415L20.97 17.172Zm-2.12-4.95 1.34-1.34.707.707 1.415-1.414-8.486-8.485-1.414 1.414.707.707-1.34 1.34 7.07 7.072Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconUnpinFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-unpin-fill`, { [`${name}-spin`]: props.spin }]);

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

