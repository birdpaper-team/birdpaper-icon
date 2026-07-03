<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.31 20.095a1.998 1.998 0 0 1-3.864.88L7 17h5l.31 3.096Zm7.135-18.059A1 1 0 0 1 21 2.868v15.263a1 1 0 0 1-1.555.832L15 16H7.5a5.5 5.5 0 0 1 0-11H15l4.445-2.964ZM15.605 7H7.5a3.5 3.5 0 0 0 0 7h8.105L19 16.261V4.737L15.605 7Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMegaphone2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-megaphone2line`, { [`${name}-spin`]: props.spin }]);

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

