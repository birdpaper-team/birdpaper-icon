<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17.254.9a2.378 2.378 0 1 1-2.312 2.928 2.834 2.834 0 0 0-2.452 2.804l-.002.008c2.128.079 4.074.678 5.614 1.632a3.356 3.356 0 1 1 3.48 5.694C21.475 17.864 17.232 21 12.009 21c-5.22 0-9.462-3.131-9.574-7.026a3.356 3.356 0 1 1 3.47-5.696c1.525-.947 3.45-1.545 5.555-1.634l-.001-.01a3.87 3.87 0 0 1 3.468-3.844A2.378 2.378 0 0 1 17.254.9Zm-5.246 14.816c-1.165 0-2.283.057-3.316.163a.265.265 0 0 0-.22.364 3.834 3.834 0 0 0 7.071 0 .265.265 0 0 0-.22-.364 32.96 32.96 0 0 0-3.315-.163Zm-4.433-4.802c-.94 0-1.748.79-1.804 1.998-.056 1.207.662 1.864 1.602 1.864.882 0 1.646-.386 1.784-1.43l.02-.216c.056-1.208-.661-2.216-1.602-2.216Zm8.867 0c-.94 0-1.657 1.008-1.601 2.216l.018.216c.139 1.044.904 1.43 1.786 1.43.94 0 1.657-.657 1.601-1.864-.056-1.208-.863-1.998-1.804-1.998Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconReddit2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-reddit2fill`, { [`${name}-spin`]: props.spin }]);

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

