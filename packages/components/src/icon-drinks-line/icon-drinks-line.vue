<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14 2H6.205a1.25 1.25 0 0 0-1.226 1.005L4.18 7H2v2h2.109L5.48 20.893A1.25 1.25 0 0 0 6.723 22h10.554a1.25 1.25 0 0 0 1.242-1.107L19.89 9H22V7h-2.18l-.8-3.995A1.25 1.25 0 0 0 17.796 2H16V0h-2v2Zm3.78 5H6.22l.6-3h10.36l.6 3ZM6.122 9h11.756l-1.27 11H7.392L6.122 9Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDrinksLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-drinks-line`, { [`${name}-spin`]: props.spin }]);

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

