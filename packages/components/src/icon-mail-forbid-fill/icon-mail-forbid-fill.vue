<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m15.266 11.554 4.388-3.798-1.308-1.512-6.285 5.439-6.414-5.445-1.294 1.524 7.702 6.54A6.967 6.967 0 0 0 11 18c0 1.074.242 2.09.674 3H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255A6.968 6.968 0 0 0 18 11a6.98 6.98 0 0 0-2.734.554Zm1.44 9.154a3 3 0 0 0 4.001-4.001l-4 4Zm-1.414-1.415 4.001-4a3 3 0 0 0-4.001 4.001ZM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMailForbidFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mail-forbid-fill`, { [`${name}-spin`]: props.spin }]);

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

