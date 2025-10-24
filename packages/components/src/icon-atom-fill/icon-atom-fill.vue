<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.415 3.308c2.074-.736 4.31-.846 5.717.56 1.406 1.407 1.296 3.643.56 5.717A14.458 14.458 0 0 1 19.552 12c.478.82.862 1.632 1.14 2.415.736 2.074.846 4.31-.56 5.717-1.407 1.406-3.643 1.296-5.717.56A14.455 14.455 0 0 1 12 19.552a14.45 14.45 0 0 1-2.415 1.14c-2.074.736-4.31.846-5.717-.56-1.406-1.407-1.296-3.642-.56-5.716.278-.783.661-1.596 1.138-2.416-.477-.82-.86-1.633-1.138-2.416-.736-2.074-.846-4.31.56-5.716 1.407-1.406 3.642-1.296 5.716-.56.783.278 1.596.661 2.416 1.138.82-.477 1.632-.86 2.415-1.138ZM5.703 13.884c-.202.412-.373.813-.51 1.201-.672 1.892-.457 3.087.09 3.633.545.546 1.74.762 3.632.09.387-.137.789-.31 1.2-.512a22.462 22.462 0 0 1-2.358-2.054 22.45 22.45 0 0 1-2.054-2.358Zm12.593 0a22.48 22.48 0 0 1-2.054 2.36 22.459 22.459 0 0 1-2.358 2.052c.412.202.813.374 1.2.512 1.893.67 3.088.456 3.634-.09.546-.546.76-1.741.09-3.633-.138-.388-.31-.79-.512-1.201ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8.915 5.192c-1.892-.671-3.087-.456-3.633.09-.546.546-.761 1.74-.09 3.633.138.387.309.789.511 1.2a22.456 22.456 0 0 1 2.055-2.357 22.453 22.453 0 0 1 2.357-2.055 11.32 11.32 0 0 0-1.2-.51Zm9.803.09c-.546-.546-1.741-.76-3.633-.09-.388.138-.79.309-1.201.511a22.46 22.46 0 0 1 2.358 2.054c.762.762 1.45 1.556 2.054 2.358.202-.411.374-.812.512-1.199.67-1.892.456-3.088-.09-3.634Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAtomFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-atom-fill`, { [`${name}-spin`]: props.spin }]);

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

