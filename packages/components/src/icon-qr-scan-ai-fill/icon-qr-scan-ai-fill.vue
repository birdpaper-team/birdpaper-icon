<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 21H3v-6h6v6Zm12 0h-6v-6h6v6Zm0-8H3v-2h18v2ZM18.53 1.32a.507.507 0 0 1 .94 0l.254.61a4.366 4.366 0 0 0 2.25 2.327l.717.32a.53.53 0 0 1 0 .962l-.758.338a4.363 4.363 0 0 0-2.22 2.251l-.246.565a.506.506 0 0 1-.934 0l-.247-.565a4.363 4.363 0 0 0-2.219-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.367 4.367 0 0 0 2.251-2.325l.253-.612ZM9 9H3V3h6v6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconQrScanAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-qr-scan-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

