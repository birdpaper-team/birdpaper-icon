<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12.485 3.121 7.758 1.94a1 1 0 0 1 .757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 0 1-3 3h-.421a5.999 5.999 0 0 1-2.896 3.158l-4.789 2.395a2 2 0 0 1-1.788 0l-4.79-2.395A5.999 5.999 0 0 1 3.422 15H3a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h1v-.97a1 1 0 0 1 .757-.97l7.758-1.939a2 2 0 0 1 .97 0ZM3 9H2v3a1 1 0 0 0 1 1V9Zm19 0h-1v4a1 1 0 0 0 1-1V9Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSurgicalMaskFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-surgical-mask-fill`, { [`${name}-spin`]: props.spin }]);

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

