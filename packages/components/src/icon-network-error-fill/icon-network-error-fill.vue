<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20.207 16.207 18.414 18l1.793 1.793-1.414 1.414L17 19.414l-1.793 1.793-1.414-1.414L15.586 18l-1.793-1.793 1.414-1.414L17 16.586l1.793-1.793 1.414 1.414ZM14 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v2h8v2h-3v1.5h-2V13H8v2h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4l.005-.102A1 1 0 0 1 5 15h1v-2H3v-2h8V9h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconNetworkErrorFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-network-error-fill`, { [`${name}-spin`]: props.spin }]);

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

