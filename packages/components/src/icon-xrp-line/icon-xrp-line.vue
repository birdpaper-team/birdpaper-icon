<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.778 4h-2.837l-4.49 4.371a3.522 3.522 0 0 1-2.451.99 3.522 3.522 0 0 1-2.452-.99L5.062 4h-2.84L8.13 9.754c2.14 2.083 5.607 2.083 7.745 0L21.778 4ZM2.223 20H5.05l4.508-4.385a3.51 3.51 0 0 1 2.443-.985c.914 0 1.792.354 2.443.985L18.952 20h2.826l-5.92-5.761c-2.132-2.073-5.585-2.073-7.715 0L2.223 20Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconXrpLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-xrp-line`, { [`${name}-spin`]: props.spin }]);

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

