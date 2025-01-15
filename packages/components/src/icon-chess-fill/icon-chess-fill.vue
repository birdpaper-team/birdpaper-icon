<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5 16h12.808c-.398-1.815-1.465-3.147-3.66-4.088a.462.462 0 0 1-.263-.568.448.448 0 0 1 .476-.303l4.485.51a1 1 0 0 0 .98-.498l.827-1.445a1 1 0 0 0-.105-1.142L15.5 2.5V.287C9.336 2.84 5 8.913 5 16Zm-1 1h15v3h1v2H3v-2h1v-3ZM15 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconChessFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-chess-fill`, { [`${name}-spin`]: props.spin }]);

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

