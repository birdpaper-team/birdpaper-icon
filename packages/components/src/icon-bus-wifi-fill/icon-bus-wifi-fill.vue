<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 3v2H5v9h14v-2h2v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h7ZM9 16H5v2h4v-2Zm10 0h-4v2h4v-2Zm-.5-15a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a1.994 1.994 0 0 0-1.413-.585Zm0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165.944.942a3.323 3.323 0 0 1 2.357-.977 3.32 3.32 0 0 1 2.201.83l.156.147.943-.943A4.652 4.652 0 0 0 18.5 3.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBusWifiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-bus-wifi-fill`, { [`${name}-spin`]: props.spin }]);

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

