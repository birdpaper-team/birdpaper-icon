<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17 3.34a9.958 9.958 0 0 1 4.428 5.331 9.975 9.975 0 0 0-6.83 4.829 9.975 9.975 0 0 0-.766 8.328A9.958 9.958 0 0 1 7 20.66a9.958 9.958 0 0 1-4.427-5.332 9.975 9.975 0 0 0 6.83-4.828 9.976 9.976 0 0 0 .767-8.329A9.958 9.958 0 0 1 17 3.34Zm-8.752-.607A7.983 7.983 0 0 1 7.67 9.5 7.982 7.982 0 0 1 2.1 13.383 9.954 9.954 0 0 1 3.34 7a9.955 9.955 0 0 1 4.908-4.267Zm13.654 7.883A9.954 9.954 0 0 1 20.66 17a9.954 9.954 0 0 1-4.908 4.266 7.983 7.983 0 0 1 .578-6.766 7.983 7.983 0 0 1 5.57-3.884Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBaseballFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-baseball-fill`, { [`${name}-spin`]: props.spin }]);

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

