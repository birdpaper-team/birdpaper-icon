<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.005 4.003c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-4c0-3.314 4.925-6 11-6Zm0 12c-3.72 0-7.01-1.008-9-2.55v.55c0 1.882 3.883 4 9 4 5.01 0 8.838-2.03 8.995-3.882l.005-.118.001-.55c-1.99 1.542-5.28 2.55-9.001 2.55Zm0-10c-5.117 0-9 2.118-9 4 0 1.882 3.883 4 9 4s9-2.118 9-4c0-1.882-3.883-4-9-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCoinLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-coin-line`, { [`${name}-spin`]: props.spin }]);

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

