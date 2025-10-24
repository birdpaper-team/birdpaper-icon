<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Zm-5.412 4.4a.632.632 0 0 0-1.176 0l-.317.763a5.458 5.458 0 0 1-2.814 2.908l-.896.399c-.513.228-.513.975 0 1.204l.95.422a5.453 5.453 0 0 1 2.773 2.813l.308.707a.633.633 0 0 0 1.168 0l.308-.707a5.454 5.454 0 0 1 2.773-2.813l.95-.422c.514-.229.513-.976 0-1.204l-.896-.399a5.46 5.46 0 0 1-2.815-2.908l-.316-.764Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAiGenerate2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ai-generate2fill`, { [`${name}-spin`]: props.spin }]);

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

