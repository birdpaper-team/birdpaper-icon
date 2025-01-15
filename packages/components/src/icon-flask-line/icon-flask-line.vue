<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.281 9.276A1.5 1.5 0 0 1 18.655 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.281-9.276A8 8 0 0 0 9 7.243V4H8V2h8Zm-2.613 8.001h-2.776c-.104.363-.229.721-.374 1.071l-.158.362L6.124 20h11.75l-3.954-8.566A9.99 9.99 0 0 1 13.387 10ZM11 7.243c0 .253-.01.506-.028.758h2.057a9.59 9.59 0 0 1-.02-.364l-.009-.394V4h-2v3.243Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFlaskLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-flask-line`, { [`${name}-spin`]: props.spin }]);

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

