<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m14.268 12.147-.853.853 7.07 7.071-1.413 1.414L12 14.415l-7.072 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.621-5.156 1.953-1.953 4.644-2.428 6.01-1.061 1.368 1.367.893 4.058-1.06 6.01-1.602 1.602-3.7 2.21-5.157 1.622ZM4.222 3.807l6.718 6.718-2.829 2.829-3.889-3.89a4 4 0 0 1 0-5.656Zm13.789 5.304c1.257-1.257 1.516-2.726 1.06-3.182-.455-.456-1.924-.196-3.181 1.06-1.258 1.258-1.517 2.727-1.061 3.183.456.455 1.925.196 3.182-1.06Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRestaurant2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-restaurant2line`, { [`${name}-spin`]: props.spin }]);

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

