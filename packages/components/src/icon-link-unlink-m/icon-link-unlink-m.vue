<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.657 14.828-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414Zm-2.828 2.829-1.415 1.414a6 6 0 0 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 0 0 12 17.657l1.414-1.414 1.415 1.414Zm0-9.9 1.414 1.415-7.071 7.07-1.415-1.414 7.072-7.07ZM5.775 2.293l1.932-.518L8.743 5.64l-1.932.518-1.036-3.864Zm9.483 16.068 1.932-.518 1.035 3.864-1.932.518-1.035-3.864ZM2.293 5.775l3.864 1.036-.518 1.931-3.864-1.035.518-1.932Zm16.068 9.483 3.864 1.035-.518 1.932-3.864-1.036.518-1.931Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLinkUnlinkM"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-link-unlink-m`, { [`${name}-spin`]: props.spin }]);

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

