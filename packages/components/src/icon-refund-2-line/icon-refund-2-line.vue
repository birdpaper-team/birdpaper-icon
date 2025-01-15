<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.676 4.257c3.928-3.219 9.733-2.995 13.4.672 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0a9.993 9.993 0 0 1-2.678-9.304l.077-.313 1.934.51a8 8 0 1 0 3.053-4.45L7.1 5.68l1.017 1.017-4.596 1.06 1.06-4.596 1.096 1.096ZM13.005 6v2h2.5v2h-5.5a.5.5 0 0 0-.09.992l.09.008h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5v-2h5.5a.5.5 0 0 0 .09-.992l-.09-.008h-4a2.5 2.5 0 1 1 0-5h1V6h2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRefund2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-refund2line`, { [`${name}-spin`]: props.spin }]);

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

