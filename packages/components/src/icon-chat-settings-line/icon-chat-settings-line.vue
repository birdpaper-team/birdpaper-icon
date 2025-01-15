<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22 12h-2V5H4v13.385L5.763 17H12v2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8Zm-7.855 7.071a4.004 4.004 0 0 1 0-2.142l-.975-.563 1-1.732.976.563A3.996 3.996 0 0 1 17 14.127V13h2v1.126c.715.184 1.352.56 1.854 1.072l.976-.564 1 1.732-.975.563a4.004 4.004 0 0 1 0 2.142l.975.563-1 1.732-.976-.564c-.502.511-1.14.888-1.854 1.072V23h-2v-1.126a3.996 3.996 0 0 1-1.854-1.072l-.976.564-1-1.732.975-.563ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconChatSettingsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-chat-settings-line`, { [`${name}-spin`]: props.spin }]);

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

