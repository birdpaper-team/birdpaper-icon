<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM7.197 14.682l-2.175 2.173a8.547 8.547 0 0 0 1.818 1.9l.305.223 2.173-2.175a5.527 5.527 0 0 1-1.98-1.883l-.14-.238Zm9.606 0a5.527 5.527 0 0 1-1.883 1.98l-.238.14 2.173 2.176a8.552 8.552 0 0 0 1.9-1.818l.223-.305-2.175-2.173ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7.145 5.022a8.549 8.549 0 0 0-1.9 1.818l-.223.305 2.175 2.173a5.527 5.527 0 0 1 1.883-1.98l.238-.14-2.173-2.176Zm9.71 0-2.173 2.175a5.527 5.527 0 0 1 1.98 1.883l.14.238 2.176-2.173a8.548 8.548 0 0 0-1.818-1.9l-.305-.223Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLifebuoyFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-lifebuoy-fill`, { [`${name}-spin`]: props.spin }]);

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

