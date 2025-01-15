<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4 2h3.323l1.2 3H3v2h2.118l.827 14.059a1 1 0 0 0 .998.941h10.114a1 1 0 0 0 .998-.941L18.882 7H21V5H10.677l-2-5H4v2Zm3.3 8.025L7.12 7h9.758l-.292 4.967c-2.307-.114-3.164-.475-4.216-.896-1.092-.436-2.4-.936-5.072-1.046Zm.117 2.008c2.304.114 3.172.48 4.223.9 1.06.424 2.316.905 4.83 1.031L16.113 20H7.886l-.469-7.967Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDrinks2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-drinks2line`, { [`${name}-spin`]: props.spin }]);

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

