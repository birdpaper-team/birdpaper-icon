<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.883 6.283a3.17 3.17 0 0 0-2.944 2.48 10.605 10.605 0 0 1-.788-2.293H9.553v3.222c0 1.171-.53 2.04-1.57 2.04s-1.632-.865-1.632-2.04V8.47H4.857v3.222a3.513 3.513 0 0 0 .862 2.44 2.966 2.966 0 0 0 2.26.958c1.798 0 3.058-1.383 3.058-3.36V9.55c.306 1.173.81 2.284 1.493 3.285l-.8 4.56h1.518l.526-3.23c.175.149.36.286.555.407.507.32 1.09.5 1.689.522h.138a3.307 3.307 0 0 0 2.397-.992 3.304 3.304 0 0 0 .94-2.417 3.314 3.314 0 0 0-3.34-3.39l-.27-.012Zm.277 1.362c1.052 0 1.853.816 1.853 2.04 0 1.223-.817 2.039-1.853 2.039l-.167.01A2.667 2.667 0 0 1 14.04 12.5c.273-2.178 1.069-2.855 2.121-2.855Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconUpworkFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-upwork-fill`, { [`${name}-spin`]: props.spin }]);

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

