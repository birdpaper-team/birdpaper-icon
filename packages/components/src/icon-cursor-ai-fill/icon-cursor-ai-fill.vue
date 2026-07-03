<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.121 6.33 12.45 1.353a.905.905 0 0 0-.9 0L2.879 6.33a.752.752 0 0 0-.379.652v10.036c0 .27.144.518.379.652l8.671 4.977c.278.16.622.16.9 0l8.672-4.977a.752.752 0 0 0 .378-.652V6.982a.752.752 0 0 0-.379-.652Zm-.544 1.054-8.371 14.414c-.057.097-.206.057-.206-.055v-9.438a.529.529 0 0 0-.266-.458L3.512 7.128c-.097-.056-.057-.204.056-.204H20.31c.237 0 .386.256.267.46Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCursorAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-cursor-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

