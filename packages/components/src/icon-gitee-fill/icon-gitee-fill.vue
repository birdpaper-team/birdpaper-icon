<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm-1.852 4.444a3.704 3.704 0 0 0-3.704 3.704v6.913c0 .273.222.495.494.495h7.285a3.334 3.334 0 0 0 3.333-3.333v-2.84a.494.494 0 0 0-.495-.494h-5.678a.495.495 0 0 0-.494.494v1.234c0 .273.22.494.493.494h3.458c.272 0 .493.221.493.493v.248c0 .818-.663 1.481-1.481 1.481H9.16a.494.494 0 0 1-.494-.493v-4.692c0-.818.663-1.48 1.482-1.481h6.913a.495.495 0 0 0 .494-.494V6.938a.493.493 0 0 0-.494-.494h-6.913Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGiteeFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-gitee-fill`, { [`${name}-spin`]: props.spin }]);

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

