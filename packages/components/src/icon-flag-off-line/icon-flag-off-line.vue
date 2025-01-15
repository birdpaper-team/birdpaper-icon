<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m16.586 18 4.607 4.607 1.414-1.415-19.8-19.799-1.413 1.415L3 4.414V22h2v-6h7l.724 1.447a1 1 0 0 0 .894.553h2.968Zm-2-2h-.35l-.35-.7.7.7Zm-2-2H5V6.414L12.586 14ZM21 6v10.758l-2-2V7h-6.236l-1-2H9.242l-2-2h5.14a1 1 0 0 1 .895.553L14 5h6a1 1 0 0 1 1 1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFlagOffLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-flag-off-line`, { [`${name}-spin`]: props.spin }]);

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

