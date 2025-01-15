<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.234 7.73A7.993 7.993 0 0 1 12 4a7.994 7.994 0 0 1 6.767 3.73l1.69-1.07A9.994 9.994 0 0 0 12 2a9.994 9.994 0 0 0-8.456 4.66l1.69 1.07ZM12 20a7.993 7.993 0 0 1-6.766-3.73l-1.69 1.07A9.994 9.994 0 0 0 12 22a9.994 9.994 0 0 0 8.457-4.66l-1.69-1.07A7.994 7.994 0 0 1 12 20Zm0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2Zm-9-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm20 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconUserCommunityLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-user-community-line`, { [`${name}-spin`]: props.spin }]);

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

