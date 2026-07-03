<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19 12a4 4 0 0 1 2.5 7.121V23.5L19 22l-2.5 1.5v-4.379a4 4 0 0 1 .855-6.767l.015-.007c.094-.042.19-.08.288-.116l.027-.01c.197-.068.4-.121.609-.159l.037-.006c.1-.017.2-.03.302-.04.017 0 .034-.002.05-.003A4.04 4.04 0 0 1 19 12Zm1-10a1 1 0 0 1 1 1v7.342A5.99 5.99 0 0 0 19 10a5.971 5.971 0 0 0-3 .804V9H8v2h7.684A5.994 5.994 0 0 0 13 16c0 1.777.773 3.372 2 4.47V22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16Zm-1 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 15h5v-2H8v2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCertificate2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-certificate2fill`, { [`${name}-spin`]: props.spin }]);

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

