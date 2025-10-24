<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5Zm0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13ZM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13Zm5.008-2.93-.262.6c-.192.44-.8.44-.992 0l-.262-.6a4.634 4.634 0 0 0-2.358-2.39l-.807-.36a.563.563 0 0 1 0-1.022l.762-.34a4.637 4.637 0 0 0 2.392-2.47l.269-.649a.538.538 0 0 1 1 0l.269.65a4.638 4.638 0 0 0 2.392 2.47l.762.339a.563.563 0 0 1 0 1.022l-.807.36a4.634 4.634 0 0 0-2.358 2.39Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAppsAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-apps-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

