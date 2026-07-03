<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.163 10.971c.35-.15.795.036.818.416a9.976 9.976 0 0 1-2.91 7.684c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142a9.977 9.977 0 0 1 7.682-2.91c.38.022.568.467.417.817a3.5 3.5 0 0 0 2.743 4.852.637.637 0 0 1 .54.541 3.5 3.5 0 0 0 4.852 2.742Zm-1.378 2.869c.07-.304-.173-.58-.483-.606a5.469 5.469 0 0 1-3.413-1.588 5.473 5.473 0 0 1-1.258-1.951.557.557 0 0 0-.326-.326 5.473 5.473 0 0 1-1.951-1.258 5.472 5.472 0 0 1-1.59-3.414c-.026-.31-.302-.554-.605-.483a8 8 0 1 0 9.626 9.626Zm-9.906.281a1.5 1.5 0 1 1-2.122 2.121 1.5 1.5 0 0 1 2.122-2.12Zm.353-6.01a1.5 1.5 0 1 1-2.121 2.121 1.5 1.5 0 0 1 2.121-2.121Zm5.657 5.657a1.5 1.5 0 1 1-2.121 2.121 1.5 1.5 0 0 1 2.121-2.121Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCookieLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-cookie-line`, { [`${name}-spin`]: props.spin }]);

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

