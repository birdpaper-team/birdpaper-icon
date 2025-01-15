<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6c0-.68-.052-1.348-.153-2H20V5H4v3.153A13.1 13.1 0 0 0 2 8V4a1 1 0 0 1 1-1Zm10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11Zm-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7Zm-4 0H2v-3a3 3 0 0 1 3 3Zm9.373-4A13.032 13.032 0 0 0 6 8.627V7h12v10h-3.627Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCastFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-cast-fill`, { [`${name}-spin`]: props.spin }]);

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

