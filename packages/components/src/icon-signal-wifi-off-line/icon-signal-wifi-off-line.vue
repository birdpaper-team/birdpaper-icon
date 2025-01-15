<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m2.808 1.393 17.678 17.678-1.414 1.414-3.683-3.682L12 21 .69 6.997c.914-.74 1.902-1.391 2.951-1.942L1.394 2.808l1.414-1.415Zm.772 5.999L12 17.817l1.967-2.437-8.835-8.836c-.532.254-1.05.536-1.552.848ZM12 3c4.285 0 8.22 1.497 11.31 3.996l-5.406 6.693-1.422-1.422 3.938-4.876A15.922 15.922 0 0 0 12 5c-.872 0-1.734.07-2.579.207L7.725 3.51C9.095 3.177 10.527 3 12.001 3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSignalWifiOffLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-signal-wifi-off-line`, { [`${name}-spin`]: props.spin }]);

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

