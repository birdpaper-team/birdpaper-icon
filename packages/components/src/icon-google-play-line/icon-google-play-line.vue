<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.001 1.734a1 1 0 0 1 .501.135l16.004 9.265a1 1 0 0 1 0 1.731L4.502 22.131a1 1 0 0 1-1.501-.866V2.735a1 1 0 0 1 1-1Zm8.292 11.68-4.498 4.498 5.699-3.299-1.2-1.2ZM5 6.118v11.76l5.88-5.88L5 6.12Zm10.284 4.302L13.707 12l1.578 1.577L18.009 12l-2.725-1.579Zm-7.49-4.336 4.5 4.5 1.199-1.2-5.699-3.3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGooglePlayLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-google-play-line`, { [`${name}-spin`]: props.spin }]);

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

