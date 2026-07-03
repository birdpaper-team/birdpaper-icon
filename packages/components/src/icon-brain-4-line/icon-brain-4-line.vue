<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.5 4.783v2.888L22 9.114v5.773l-2.501 1.444.001 2.887-5 2.887L12 20.66l-2.5 1.444-5-2.887V16.33L2 14.888l.001-5.775L4.5 7.67V4.784l5-2.887 2.499 1.444 2.502-1.445L19.5 4.783Zm-6.5.29-.001 3.35 2.965 1.71-1 1.733L11 9.577V5.073l-1.5-.866-3.001 1.731v2.887L4 10.268v3.465l2.5 1.444v2.887l3 1.732 1.5-.867.001-3.352-2.965-1.712 1-1.731 3.965 2.289v4.507l1.499.866 3-1.733v-2.886l2.5-1.445V10.27l-2.501-1.445.001-2.887-2.999-1.732L13 5.072Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrain4Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brain4line`, { [`${name}-spin`]: props.spin }]);

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

