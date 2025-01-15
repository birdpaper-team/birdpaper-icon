<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 .269 5.636 6.633a9 9 0 1 0 12.728 0L12 .269Zm4.243 9.902-7.071 7.072-1.415-1.415 7.072-7.07 1.414 1.413ZM8.11 9.111a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.121-2.121Zm7.778 7.778a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWaterPercentFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-water-percent-fill`, { [`${name}-spin`]: props.spin }]);

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

