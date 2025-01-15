<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 3a6 6 0 0 0-6 6v.351c-1.52.746-2.367 2.565-1.733 4.307l.312.86a7 7 0 0 1 .422 2.391V19.5A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-2.59a7 7 0 0 1 .421-2.393l.313-.86c.633-1.741-.213-3.56-1.734-4.306V9a6 6 0 0 0-6-6H9Zm10 6.032c-1.694.23-3 1.682-3 3.44V14H8v-1.528a3.472 3.472 0 0 0-3-3.44V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v.032ZM16 16v1h2v-4.528a1.472 1.472 0 1 1 2.855.502l-.313.86a9 9 0 0 0-.541 3.075V19H4v-2.09a9 9 0 0 0-.542-3.076l-.313-.86a1.471 1.471 0 1 1 2.855-.502V17h2v-1h8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSofaLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-sofa-line`, { [`${name}-spin`]: props.spin }]);

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

