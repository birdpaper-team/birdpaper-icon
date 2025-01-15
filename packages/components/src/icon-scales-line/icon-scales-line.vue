<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2h2Zm-8 4.343 2.828 2.829a4 4 0 1 1-5.657 0L5 6.343Zm14 0 2.828 2.829a4 4 0 1 1-5.657 0l2.829-2.829Zm-14 2.829-1.414 1.414a2 2 0 1 0 2.828 0L4.998 9.172Zm14 0-1.414 1.414a2 2 0 1 0 2.828 0l-1.414-1.414Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconScalesLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-scales-line`, { [`${name}-spin`]: props.spin }]);

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

