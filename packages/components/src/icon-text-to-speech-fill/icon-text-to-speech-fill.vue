<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13.414 5.586a2 2 0 0 0 0 2.828l5.853 5.853c.666.665 1.722.792 2.422.162.106-.096.209-.196.311-.296V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10l-2.586 2.586ZM6 11h3v6h2v-6h3V9H6v2Zm14.657-9.657A7.976 7.976 0 0 1 23 7c0 2.21-.895 4.21-2.343 5.657l-1.415-1.415A5.98 5.98 0 0 0 21 7a5.98 5.98 0 0 0-1.758-4.242l1.415-1.415Zm-2.829 2.829A3.987 3.987 0 0 1 19 7a3.987 3.987 0 0 1-1.172 2.828l-1.414-1.414C16.776 8.052 17 7.552 17 7c0-.552-.224-1.052-.586-1.414l1.414-1.414Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTextToSpeechFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-text-to-speech-fill`, { [`${name}-spin`]: props.spin }]);

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

