<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5.001l2.268 2.268c.666.665 1.722.792 2.421.162A9.967 9.967 0 0 0 10 7c0-1.423-.3-2.775-.837-4H18Zm-8 8h3v6h2v-6h3V9h-8v2ZM5.657 1.343A7.976 7.976 0 0 1 8 7c0 2.21-.895 4.21-2.343 5.657l-1.415-1.415A5.98 5.98 0 0 0 6 7a5.98 5.98 0 0 0-1.758-4.242l1.415-1.415ZM2.828 4.172A3.987 3.987 0 0 1 4 7a3.987 3.987 0 0 1-1.172 2.828L1.414 8.414C1.776 8.052 2 7.552 2 7c0-.552-.224-1.052-.586-1.414l1.414-1.414Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSpeechToTextFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-speech-to-text-fill`, { [`${name}-spin`]: props.spin }]);

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

