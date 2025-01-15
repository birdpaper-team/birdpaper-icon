<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2 18h7v2H2v-2Zm0-7h9v2H2v-2Zm0-7h20v2H2V4Zm18.674 9.025 1.156-.391 1 1.732-.916.805a4.014 4.014 0 0 1 0 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.654-1.435.83L19 21h-2l-.24-1.196a3.997 3.997 0 0 1-1.434-.83l-1.156.392-1-1.732.916-.805a4.014 4.014 0 0 1 0-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.175 1.024.46 1.434.83ZM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconListSettingsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-list-settings-line`, { [`${name}-spin`]: props.spin }]);

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

