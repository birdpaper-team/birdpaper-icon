<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12 20.689-2.01-1.163-.002 2.31L12 23l2.011-1.165-.002-2.309-2.01 1.163Zm4.007-2.32.003 2.31L21.5 17.5v-6.354l-2 1.151v4.05l-3.493 2.022Zm3.493-8.38 2-1.151V6.5l-1.996-1.156L17.508 6.5 19.5 7.653V9.99Zm-3.988-4.645 1.996-1.155L12 1 6.492 4.189l1.996 1.156L12 3.31l3.512 2.033ZM6.492 6.5 4.496 5.345 2.5 6.5v2.338l2 1.152V7.653L6.492 6.5ZM2.5 11.146l2 1.152v4.049l3.492 2.022-.003 2.31L2.5 17.5v-6.354Zm15-2.34-1.988-1.15L12 9.689 8.488 7.656 6.5 8.806v2.335l3.498 2.014-.004 4.061L12 18.378l2.006-1.161L14 13.155l3.499-2.014V8.806ZM7.995 16.06l.002-1.748-1.497-.862v1.745l1.495.865ZM10.483 6.5 12 7.378l1.516-.878L12 5.622l-1.517.878Zm5.52 7.81 1.497-.861v1.745l-1.495.866-.002-1.75Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBnbLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-bnb-line`, { [`${name}-spin`]: props.spin }]);

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

