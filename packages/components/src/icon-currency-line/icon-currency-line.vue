<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17.005 16.003h2v-12h-10v2h8v10Zm0 2v2.999c0 .553-.45 1-1.007 1H4.012a1.001 1.001 0 0 1-1.007-1l.002-13.998c0-.553.45-1.001 1.007-1.001h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3Zm-11.998-10-.002 12h10v-12H5.007Zm1.998 8h4.5a.5.5 0 0 0 0-1h-3a2.5 2.5 0 0 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCurrencyLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-currency-line`, { [`${name}-spin`]: props.spin }]);

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

