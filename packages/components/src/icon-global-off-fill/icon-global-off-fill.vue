<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m22.035 16.379-2.12 2.121 2.12 2.121-1.414 1.415-2.121-2.122-2.121 2.122-1.414-1.415 2.12-2.121-2.12-2.121 1.414-1.414 2.121 2.12 2.121-2.12 1.414 1.414ZM7.527 13a17.9 17.9 0 0 0 2.925 8.88A10.006 10.006 0 0 1 2.05 13h5.478Zm6.942 0c-.024.393-.064.781-.117 1.166a5.982 5.982 0 0 0-1.755 5.403c-.188.349-.385.69-.597 1.023A15.91 15.91 0 0 1 9.53 13h4.939ZM10.452 2.12A17.9 17.9 0 0 0 7.527 11H2.05a10.006 10.006 0 0 1 8.403-8.88ZM12 3.407A15.91 15.91 0 0 1 14.469 11H9.53A15.91 15.91 0 0 1 12 3.408Zm1.548-1.289A10.005 10.005 0 0 1 21.95 11h-5.477a17.901 17.901 0 0 0-2.925-8.88Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGlobalOffFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-global-off-fill`, { [`${name}-spin`]: props.spin }]);

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

