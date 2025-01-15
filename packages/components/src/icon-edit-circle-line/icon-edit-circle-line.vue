<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.684 4.025a8 8 0 1 0 7.287 7.287 7.936 7.936 0 0 0-.603-2.439l1.5-1.502A9.935 9.935 0 0 1 22 11.997c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10a9.982 9.982 0 0 1 4.626 1.132l-1.501 1.5a7.941 7.941 0 0 0-2.44-.604Zm7.801-1.928L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416 9.192-9.193Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconEditCircleLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-edit-circle-line`, { [`${name}-spin`]: props.spin }]);

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

