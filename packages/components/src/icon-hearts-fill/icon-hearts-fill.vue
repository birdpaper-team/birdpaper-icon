<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17.363 11.045a3.614 3.614 0 0 1 5.084 0 3.55 3.55 0 0 1 0 5.047L17 21.5l-5.447-5.408a3.55 3.55 0 0 1 0-5.047 3.614 3.614 0 0 1 5.084 0l.363.36.363-.36Zm1.88-6.288a5.986 5.986 0 0 1 1.689 3.338A5.619 5.619 0 0 0 17 8.808a5.617 5.617 0 0 0-6.856.818 5.55 5.55 0 0 0-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconHeartsFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-hearts-fill`, { [`${name}-spin`]: props.spin }]);

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

