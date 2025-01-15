<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.005 13.003a3 3 0 0 1 2.08 5.162l-1.91 1.837h2.83v2h-6l-.001-1.724 3.694-3.555a1 1 0 1 0-1.693-.72h-2a3 3 0 0 1 3-3Zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2Zm-14-1a7.985 7.985 0 0 0 3 6.245v2.417a9.996 9.996 0 0 1-5-8.662h2Zm8-10c5.185 0 9.449 3.946 9.95 9h-2.012a8.001 8.001 0 0 0-14.554-3.5h2.616v2h-6v-6h2v2.499a9.985 9.985 0 0 1 8-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "Icon24HoursLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon24hours-line`, { [`${name}-spin`]: props.spin }]);

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

