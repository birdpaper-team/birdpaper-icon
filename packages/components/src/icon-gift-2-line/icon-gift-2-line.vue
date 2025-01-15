<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.505 2.003a3.5 3.5 0 0 1 3.163 5h3.337a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-8h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3.337a3.5 3.5 0 0 1 5.664-3.95 3.48 3.48 0 0 1 2.499-1.05Zm3.5 11h-12v7h12v-7Zm2-4h-16v2h16v-2Zm-10.5-5a1.5 1.5 0 0 0-.145 2.993l.145.007h1.5v-1.5A1.5 1.5 0 0 0 9.649 4.01l-.144-.007Zm5 0-.145.007a1.5 1.5 0 0 0-1.348 1.348l-.007.145v1.5h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986l-.144-.007Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGift2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-gift2line`, { [`${name}-spin`]: props.spin }]);

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

