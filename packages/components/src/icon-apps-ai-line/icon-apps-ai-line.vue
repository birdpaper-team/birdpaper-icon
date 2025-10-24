<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 17.25A4.25 4.25 0 1 1 6.75 13H11v4.25ZM17.25 13A4.25 4.25 0 1 1 13 17.25V13h4.25Zm-10.5 2A2.25 2.25 0 1 0 9 17.25V15H6.75ZM15 17.25A2.25 2.25 0 1 0 17.25 15H15v2.25ZM6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5Zm10 .34a.538.538 0 0 1 1 0l.27.648a4.638 4.638 0 0 0 2.391 2.47l.762.34a.563.563 0 0 1 0 1.022l-.808.359a4.635 4.635 0 0 0-2.357 2.39l-.262.6c-.192.44-.8.44-.992 0l-.262-.6a4.635 4.635 0 0 0-2.357-2.39l-.808-.359a.563.563 0 0 1 0-1.022l.762-.34a4.638 4.638 0 0 0 2.391-2.47l.27-.648Zm-10 1.66a2.25 2.25 0 0 0 0 4.5H9V6.75A2.25 2.25 0 0 0 6.75 4.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAppsAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-apps-ai-line`, { [`${name}-spin`]: props.spin }]);

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

