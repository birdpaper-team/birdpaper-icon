<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4.703L16 20a1 1 0 0 0 1.186.77l3.912-.832a1 1 0 0 0 .77-1.186l-2.91-13.694a1 1 0 0 0-1.186-.77l-2.78.59A1 1 0 0 0 14 4h-4a1 1 0 0 0-1-1H4Zm6 3h3v8h-3V6Zm0 13v-3h3v3h-3ZM8 5v10H5V5h3Zm0 12v2H5v-2h3Zm9.332-.35 1.956-.416.416 1.956-1.956.416-.416-1.956Zm-.416-1.957-1.663-7.825 1.956-.416 1.664 7.825-1.957.416Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBookShelfLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-book-shelf-line`, { [`${name}-spin`]: props.spin }]);

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

