<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.488 3.33a4 4 0 0 1 4.899 2.83l2.459 9.175a4.5 4.5 0 1 1-8.842 1.372 6.997 6.997 0 0 1-4.01 0 4.5 4.5 0 1 1-8.84-1.372L3.61 6.16a4 4 0 0 1 7.86.87 5.047 5.047 0 0 1 1.055 0 4.003 4.003 0 0 1 2.962-3.699ZM6.146 14.085a2.5 2.5 0 1 0-1.294 4.83 2.5 2.5 0 0 0 1.294-4.83Zm14.69 1.525a2.5 2.5 0 1 0 .132.493l-.054-.25-.079-.243Zm-2.38-8.933a2 2 0 0 0-3.908.835l.043.2.022.103.32 2.029-1.974.313-.167-1.051a3.006 3.006 0 0 0-1.587 0l-.166 1.05-1.975-.312.257-1.626.064-.403.021-.103a2 2 0 1 0-3.863-1.035l-1.491 5.562a4.481 4.481 0 0 1 2.612-.086 4.487 4.487 0 0 1 2.743 2.12c.756.46 1.641.727 2.592.727.951 0 1.835-.268 2.591-.727a4.488 4.488 0 0 1 2.744-2.12 4.48 4.48 0 0 1 2.611.085l-1.49-5.561Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBinocularsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-binoculars-line`, { [`${name}-spin`]: props.spin }]);

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

