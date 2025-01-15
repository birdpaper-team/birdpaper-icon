<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M17.001 4a5 5 0 1 1-.892 9.92l-2.651 1.989a4 4 0 1 1-7.923.068L1.709 14.43l.75-1.854 3.826 1.545a3.994 3.994 0 0 1 3.697-1.592l2.04-3.061A5 5 0 0 1 17.002 4Zm-7.5 10.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 0 1-.75 1.854L7.52 16.78A2 2 0 1 0 9.501 14.5Zm3.364-2.69-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5.027 5.027 0 0 1-1.135-1.191ZM17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSteamLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-steam-line`, { [`${name}-spin`]: props.spin }]);

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

