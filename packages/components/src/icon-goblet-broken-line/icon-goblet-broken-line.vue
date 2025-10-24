<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.867 2 1.122 7.858c.302 2.115-.521 3.931-1.88 5.189-1.105 1.022-2.568 1.685-4.11 1.888V20h5v2H6v-2h5v-3.065c-1.54-.203-3.004-.866-4.109-1.888-1.358-1.258-2.183-3.074-1.88-5.189L6.133 2h11.734Zm-3.79 2-.51.884 2.598 1.5-2.75 4.764-1.733-1 1.75-3.032-2.597-1.5L11.768 4H7.867l-.878 6.142c-.198 1.385.322 2.569 1.26 3.436.954.883 2.333 1.422 3.75 1.422 1.418 0 2.797-.539 3.752-1.422.937-.867 1.456-2.05 1.258-3.436L16.133 4h-2.056Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGobletBrokenLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-goblet-broken-line`, { [`${name}-spin`]: props.spin }]);

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

