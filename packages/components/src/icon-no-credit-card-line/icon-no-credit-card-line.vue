<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m19.586 21 1.607 1.607 1.414-1.415-19.8-19.799-1.413 1.415.726.726A.996.996 0 0 0 2.005 4v16a1 1 0 0 0 1 1h16.58Zm-2-2H4.005v-7h6.58l7 7Zm-11-11H4.005V5.419L6.585 8Zm15.419-4v13.762l-2-2V12h-3.762l-4-4h7.762V5H9.243l-2-2h13.762a1 1 0 0 1 1 1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconNoCreditCardLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-no-credit-card-line`, { [`${name}-spin`]: props.spin }]);

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

