<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8 12h2v2H4v-2h2a6 6 0 1 1 6 6v-2a4 4 0 1 0-4-4Zm-2 8h9v2H6v-2Zm-4-4h8v2H2v-2Zm9-15h2v3h-2V1ZM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93ZM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121Zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121ZM23 11v2h-3v-2h3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSunFoggyLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-sun-foggy-line`, { [`${name}-spin`]: props.spin }]);

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

