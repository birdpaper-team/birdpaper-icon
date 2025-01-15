<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66Zm4 6.659a3 3 0 0 1-3-3v-4a3 3 0 1 1 6 0v5h1.434a2 2 0 0 1 1.626.836l.089.135 2.709 4.514-1.715 1.03L16.43 17h-4.433Zm0-15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWheelchairFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-wheelchair-fill`, { [`${name}-spin`]: props.spin }]);

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

