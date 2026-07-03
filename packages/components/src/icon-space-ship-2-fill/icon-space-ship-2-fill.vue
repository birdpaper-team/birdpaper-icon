<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.95 17.293a1 1 0 0 1 1.413 1.415l-2.839 2.838a1 1 0 1 1-1.414-1.414l2.84-2.84Zm-1.778-3.88a1 1 0 0 1 1.414 1.416l-5.657 5.656a1 1 0 1 1-1.414-1.414l5.657-5.657Zm8.25-10.7c1.219-.49 2.455-.188 3.254.61.798.799 1.099 2.035.61 3.253l-4.254 10.597a1 1 0 0 1-1.889-.095 11.99 11.99 0 0 0-3.045-5.177A11.99 11.99 0 0 0 6.92 8.856a1 1 0 0 1-.095-1.888l10.597-4.255Zm-12.13 8.924a1 1 0 1 1 1.415 1.414l-2.839 2.838a1 1 0 0 1-1.414-1.414l2.839-2.838Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSpaceShip2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-space-ship2fill`, { [`${name}-spin`]: props.spin }]);

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

