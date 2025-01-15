<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.514 5.14H4.68A3.68 3.68 0 0 0 1 8.82v6.358a3.68 3.68 0 0 0 3.68 3.68h4.85L8.36 17.2 4.822 16.12a1.538 1.538 0 0 1-1.07-1.472V9.37A1.53 1.53 0 0 1 4.822 7.9l3.536-1.104L9.514 5.14Zm9.825 0h-4.85l1.17 1.656L19.195 7.9a1.527 1.527 0 0 1 1.067 1.471v5.277a1.535 1.535 0 0 1-1.067 1.472L15.66 17.2l-1.17 1.656h4.85a3.658 3.658 0 0 0 3.66-3.68V8.82a3.68 3.68 0 0 0-3.66-3.68Zm-3.672 5.998h-7.33v1.652h7.33v-1.652Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAlibabaCloudFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-alibaba-cloud-fill`, { [`${name}-spin`]: props.spin }]);

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

