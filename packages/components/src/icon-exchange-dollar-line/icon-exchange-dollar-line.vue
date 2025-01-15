<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.379 15.106A8.001 8.001 0 0 0 8.035 5.056l-.993-1.737a9.996 9.996 0 0 1 9.962.023c4.49 2.593 6.21 8.143 4.118 12.77l1.341.775-4.165 2.214-.165-4.714 1.246.719ZM4.629 8.9a8.001 8.001 0 0 0 11.345 10.05l.992 1.737a9.996 9.996 0 0 1-9.962-.024c-4.49-2.593-6.21-8.142-4.117-12.77L1.545 7.12 5.71 4.905l.165 4.714-1.245-.72Zm3.875 5.103h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 0 1 0-5h1v-1h2v1h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1h-2v-1h-2.5v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconExchangeDollarLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-exchange-dollar-line`, { [`${name}-spin`]: props.spin }]);

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

