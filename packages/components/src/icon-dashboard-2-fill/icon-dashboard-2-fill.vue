<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 3a7 7 0 0 0-5.106 11.789l.156.16 1.414-1.414a5 5 0 0 1 4.83-8.366l1.564-1.56A6.976 6.976 0 0 0 12 5Zm6.392 4.143-1.561 1.562a5.008 5.008 0 0 1-1.295 4.83l1.414 1.415A6.978 6.978 0 0 0 19 12a6.975 6.975 0 0 0-.608-2.857Zm-2.15-2.8-3.725 3.725A2.003 2.003 0 0 0 10 12a2 2 0 1 0 3.932-.517l3.725-3.726-1.414-1.414Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDashboard2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-dashboard2fill`, { [`${name}-spin`]: props.spin }]);

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

