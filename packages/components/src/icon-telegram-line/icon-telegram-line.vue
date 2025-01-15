<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 10c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.358-12.618c-.972.405-2.916 1.242-5.831 2.513-.474.188-.722.372-.744.552-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368.324.007.685-.127 1.084-.4 2.724-1.84 4.13-2.769 4.218-2.789.063-.014.149-.032.207.02.059.052.053.15.047.177-.038.161-1.534 1.552-2.308 2.271-.23.215-.456.434-.683.653-.474.457-.83.8.02 1.36.861.568 1.73 1.134 2.57 1.733.414.296.786.56 1.246.519.267-.025.543-.276.683-1.026.332-1.77.983-5.608 1.133-7.19a1.764 1.764 0 0 0-.017-.393.421.421 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117-.376.007-.953.207-3.73 1.362Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTelegramLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-telegram-line`, { [`${name}-spin`]: props.spin }]);

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

