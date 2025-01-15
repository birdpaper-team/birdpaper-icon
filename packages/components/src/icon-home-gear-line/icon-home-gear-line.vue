<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.389a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1ZM6 19h12V9.157l-6-5.454-6 5.454V19Zm2.591-5.191a3.508 3.508 0 0 1 0-1.622l-.991-.572 1-1.732.991.573a3.494 3.494 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573 1 1.731-.991.573a3.508 3.508 0 0 1 0 1.622l.991.572-1 1.731-.991-.572a3.496 3.496 0 0 1-1.404.811v1.145h-2V16.35a3.493 3.493 0 0 1-1.404-.811l-.991.572-1-1.73.991-.573Zm3.404.688a1.5 1.5 0 1 0 0-2.998 1.5 1.5 0 0 0 0 2.998Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconHomeGearLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-home-gear-line`, { [`${name}-spin`]: props.spin }]);

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

