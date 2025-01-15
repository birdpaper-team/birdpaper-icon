<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4 10a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm3-4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm5-1a6 6 0 0 1 5.996 5.775l.003.26a3.5 3.5 0 0 1-.307 6.96L20.5 19h-3.501a1 1 0 0 1-.117-1.993L17 17h3.447l.138-.002a1.5 1.5 0 0 0 .267-2.957l-.135-.026-1.77-.252.053-1.787-.004-.176A4 4 0 0 0 15.2 8.005L15 8c-.268 0-.531.026-.788.077L14 8.126V18a1 1 0 0 1-.883.993L13 19a1 1 0 0 1-1-1V6.803A5.973 5.973 0 0 1 15 6ZM1 12a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSoundcloudLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-soundcloud-line`, { [`${name}-spin`]: props.spin }]);

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

