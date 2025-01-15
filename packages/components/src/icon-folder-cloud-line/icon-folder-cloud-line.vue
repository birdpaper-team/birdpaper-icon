<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7v-2H4V5h5.586l2 2H20v4h2V6a1 1 0 0 0-1-1h-8.586l-2-2H3Zm9 15.25c0-1.26.847-2.32 2.002-2.647C13.944 13.658 15.552 12 17.5 12c1.948 0 3.555 1.658 3.498 3.603A2.751 2.751 0 0 1 20.25 21h-5.5A2.75 2.75 0 0 1 12 18.25ZM17.5 14a1.5 1.5 0 0 0-1.5 1.5c0 .464.024.975.057 1.46-.964.205-2.057.592-2.057 1.29 0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75c0-.698-1.093-1.085-2.057-1.29.033-.485.057-.996.057-1.46a1.5 1.5 0 0 0-1.5-1.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFolderCloudLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-folder-cloud-line`, { [`${name}-spin`]: props.spin }]);

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

