<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.931 9.46H3.594l-.73 3.751h1.187c.788 0 1.374-.149 1.76-.445.385-.297.644-.792.779-1.486.13-.666.07-1.136-.176-1.41-.248-.273-.74-.41-1.483-.41Zm2.45 4.153c-.369.354-.814.62-1.298.78-.476.154-1.084.233-1.82.233H2.588l-.463 2.382H.174l1.742-8.962H5.67c1.13 0 1.953.296 2.471.89.519.592.674 1.419.468 2.482-.08.42-.225.825-.432 1.2a4.048 4.048 0 0 1-.795.995Zm5.701 1.013.77-3.965c.089-.45.055-.76-.097-.922-.151-.165-.476-.247-.973-.247h-1.547l-.997 5.136H8.3l1.742-8.964h1.937l-.463 2.383h1.725c1.087 0 1.835.19 2.247.568.412.379.535.992.373 1.84l-.81 4.171h-1.969Zm10.763-3.208c-.078.42-.224.825-.432 1.2a4.049 4.049 0 0 1-.795.995c-.37.353-.814.62-1.299.78-.476.154-1.084.233-1.822.233h-1.671l-.464 2.383H15.41l1.743-8.962h3.752c1.13 0 1.953.296 2.471.89.518.59.676 1.418.469 2.48ZM20.169 9.46h-1.336l-.731 3.751h1.187c.789 0 1.375-.149 1.76-.445.385-.297.644-.792.78-1.486.13-.666.07-1.136-.177-1.41-.247-.273-.742-.41-1.483-.41Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPhpFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-php-fill`, { [`${name}-spin`]: props.spin }]);

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

