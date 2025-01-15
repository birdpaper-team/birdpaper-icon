<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.16 4.258c.033 3.5.59 4.81.787 6.701a9.98 9.98 0 0 1-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l2.852-2.853a6.002 6.002 0 0 0 8.368-8.368l4.267-4.265Zm-2.83-.002-2.852 2.853a6.002 6.002 0 0 0-8.368 8.368l-4.267 4.265c-.034-3.5-.591-4.811-.788-6.701A9.98 9.98 0 0 1 4.93 4.929c3.666-3.666 9.471-3.89 13.4-.673ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconHonorOfKingsFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-honor-of-kings-fill`, { [`${name}-spin`]: props.spin }]);

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

