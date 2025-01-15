<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22.001 10.69c0 1.787-.687 3.4-2.123 4.974-2.1 2.414-6.788 5.363-7.864 5.812-1.074.451-.911-.287-.874-.537l.137-.85c.034-.262.068-.65-.032-.9-.112-.277-.556-.424-.881-.492C5.559 18.059 2 14.7 2 10.69c0-4.475 4.487-8.118 10-8.118s10 3.643 10 8.118Zm-3.6 3.626c1.113-1.22 1.6-2.362 1.6-3.626 0-3.268-3.51-6.118-8-6.118s-8 2.85-8 6.118c0 2.905 2.728 5.507 6.626 6.024l.147.026c1.079.226 1.884.614 2.329 1.708l.037.096c1.805-1.176 4.173-2.979 5.26-4.229Zm-.262-4.002a.526.526 0 0 1 0 1.051h-1.463v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938h1.463Zm-3.213 2.514a.524.524 0 0 1-.526.522.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525.287 0 .525.238.525.525v3.976Zm-4.784 0a.527.527 0 0 1-.526.524.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525.289 0 .524.238.524.525v3.976Zm-2.055.524H6.098a.528.528 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLineLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-line-line`, { [`${name}-spin`]: props.spin }]);

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

