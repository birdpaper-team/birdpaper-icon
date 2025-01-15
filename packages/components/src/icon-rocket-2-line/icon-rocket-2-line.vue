<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.502 20.005A6.522 6.522 0 0 1 12 23.507a6.523 6.523 0 0 1-3.502-3.502h2.26c.326.488.747.912 1.242 1.243.495-.33.916-.755 1.242-1.243h2.26ZM18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545 3.496 1.098 6 4.062 6 7.545v5.804Zm-.73 2.195L16 15.565v-6.56c0-2.318-1.57-4.43-4-5.421-2.43.99-4 3.103-4 5.42v6.561l-1.27 1.44h10.54Zm-5.27-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRocket2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-rocket2line`, { [`${name}-spin`]: props.spin }]);

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

