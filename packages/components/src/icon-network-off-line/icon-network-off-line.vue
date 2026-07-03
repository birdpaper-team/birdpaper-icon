<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m21.606 20.192-1.414 1.414-.724-.724A.992.992 0 0 1 19 21h-4a1 1 0 0 1-1-1v-4c0-.17.043-.329.117-.469L11.586 13H8v2h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4l.005-.102A1 1 0 0 1 5 15h1v-2H3v-2h6.586L2.394 3.808l1.414-1.414 17.798 17.798ZM6 19h2v-2H6v2Zm10 0h1.586L16 17.414V19Zm5-6h-3v.758L15.242 11H21v2ZM14 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.758l-2-2H13V5h-2v1.758l-2-2V4a1 1 0 0 1 1-1h4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconNetworkOffLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-network-off-line`, { [`${name}-spin`]: props.spin }]);

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

