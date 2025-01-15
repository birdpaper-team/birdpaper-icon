<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2Zm-3.823 8.809-.991.572 1 1.731.991-.572c.393.371.872.653 1.405.811v1.145h1.998V16.35a3.495 3.495 0 0 0 1.405-.811l.992.572.999-1.73-.991-.573a3.507 3.507 0 0 0 0-1.622l.991-.572-1-1.732-.992.573a3.495 3.495 0 0 0-1.404-.812V8.5h-1.999v1.144a3.494 3.494 0 0 0-1.404.812L8.6 9.883 7.6 11.615l.991.572a3.508 3.508 0 0 0 0 1.622Zm3.404.688a1.5 1.5 0 1 1 0-2.998 1.5 1.5 0 0 1 0 2.998Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFolderSettingsFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-folder-settings-fill`, { [`${name}-spin`]: props.spin }]);

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

