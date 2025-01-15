<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5ZM9 9V6.75A2.25 2.25 0 1 0 6.75 9H9Zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13Zm0 2A2.25 2.25 0 1 0 9 17.25V15H6.75Zm10.5-12.5a4.25 4.25 0 0 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25Zm0 6.5A2.25 2.25 0 1 0 15 6.75V9h2.25ZM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13Zm2 2v2.25A2.25 2.25 0 1 0 17.25 15H15Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAppsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-apps-line`, { [`${name}-spin`]: props.spin }]);

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

