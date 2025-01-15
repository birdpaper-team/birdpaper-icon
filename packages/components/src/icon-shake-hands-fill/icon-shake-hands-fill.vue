<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.291 6h.71a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2l-4.17-5.836a2 2 0 0 0-2.201-.753l-2.486.746a2 2 0 0 1-1.988-.502l-.293-.293a1 1 0 0 1 .152-1.539l5.401-3.6a2 2 0 0 1 2.183-.024l4.156 2.645A1 1 0 0 0 19.29 6ZM5.027 14.295l-1.616 1.414a1 1 0 0 0 .041 1.538l5.14 4.04a1 1 0 0 0 1.487-.29l.704-1.232a2 2 0 0 0-.257-2.338l-2.702-2.973a2 2 0 0 0-2.797-.16ZM7.046 5H3a1 1 0 0 0-1 1v7.516a2 2 0 0 0 .35 1.13 2.61 2.61 0 0 1 .074-.066l1.615-1.414a3.5 3.5 0 0 1 4.895.28l2.702 2.972a3.5 3.5 0 0 1 .45 4.09l-.655 1.146a2 2 0 0 0 1.738-.155l4.41-2.646a1 1 0 0 0 .299-1.438l-5.267-7.379a.5.5 0 0 0-.55-.188l-2.486.745a3.5 3.5 0 0 1-3.48-.877l-.293-.293a2.5 2.5 0 0 1 .38-3.848L7.047 5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconShakeHandsFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-shake-hands-fill`, { [`${name}-spin`]: props.spin }]);

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

