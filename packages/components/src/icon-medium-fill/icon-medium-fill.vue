<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6.158 3h11.684A3.158 3.158 0 0 1 21 6.158v3.366a3.68 3.68 0 0 0-.245-.008 2.913 2.913 0 0 0-2.294 1.1c-.472.586-.758 1.377-.828 2.266-.015.177-.02.355-.017.532.047 2.014 1.135 3.624 3.068 3.624.108 0 .213-.006.316-.015v.82A3.158 3.158 0 0 1 17.842 21H6.158A3.158 3.158 0 0 1 3 17.842V6.158A3.158 3.158 0 0 1 6.158 3ZM21 15.388v-2.726h-1.653c-.074 1.316.646 2.43 1.653 2.726Zm0-3.107V9.973a1.033 1.033 0 0 0-.256-.035c-.815.017-1.3.992-1.36 2.343H21ZM17.697 7.3l.015-.003v-.11h-2.9l-2.69 6.326L9.43 7.187H6.306v.11l.014.003c.529.12.797.298.797.94v7.52c0 .642-.27.82-.798.94l-.014.002v.11h2.12v-.11L8.41 16.7c-.529-.12-.798-.298-.798-.94V8.676l3.458 8.137h.196l3.559-8.364v7.496c-.046.508-.312.665-.791.773l-.014.003v.109h3.692v-.11l-.015-.002c-.48-.108-.752-.265-.797-.773l-.003-7.705h.003c0-.642.268-.82.797-.94Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMediumFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-medium-fill`, { [`${name}-spin`]: props.spin }]);

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

