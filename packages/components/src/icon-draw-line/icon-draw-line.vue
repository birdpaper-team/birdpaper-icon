<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.364 1.808a1 1 0 0 1 .707.293L21.9 4.929a1 1 0 0 1 0 1.414l-3.671 3.672c1.055 1.372 1.849 2.752 2.283 3.99.254.727.402 1.452.377 2.123-.026.678-.235 1.362-.756 1.883-.813.813-1.992.864-3.041.65-1.085-.223-2.302-.776-3.526-1.55l1.069-1.691c1.105.7 2.093 1.124 2.86 1.281.8.164 1.12-.001 1.224-.104.068-.068.159-.215.172-.545.013-.339-.063-.803-.267-1.385-.328-.935-.947-2.051-1.823-3.225l-1.972 1.972a1 1 0 0 1-.707.293h-2.828a1 1 0 0 1-1-1V9.879a1 1 0 0 1 .293-.707l1.857-1.859c-1.207-.712-2.431-1.121-3.533-1.227-1.399-.134-2.53.22-3.274.964-.862.861-1.204 2.252-.862 3.96.34 1.701 1.347 3.595 2.984 5.232C9.516 18 11.565 19.03 13.353 19.29l-.29 1.979c-2.278-.334-4.708-1.6-6.72-3.612-1.878-1.877-3.103-4.115-3.53-6.254-.426-2.13-.073-4.286 1.409-5.767C5.496 4.36 7.278 3.92 9.102 4.095c1.578.151 3.24.765 4.795 1.765l3.76-3.76.074-.066a1 1 0 0 1 .633-.226Zm-6.07 8.485v1.414h1.413l6.071-6.071-1.414-1.414-6.07 6.071Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDrawLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-draw-line`, { [`${name}-spin`]: props.spin }]);

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

