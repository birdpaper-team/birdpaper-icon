<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 1a9 9 0 0 1 9 9v4a9 9 0 0 1-12.092 8.455c.128-.177.251-.357.369-.542l.17-.28a10.918 10.918 0 0 0 1.55-5.345L11 16V9h2v7c0 1.772-.355 3.462-.997 5.002a7.028 7.028 0 0 0 2.27-.38c.442-1.36.693-2.807.724-4.308L15 16v-3.001h2V16c0 1.088-.102 2.153-.298 3.185a6.978 6.978 0 0 0 2.294-4.944L19 14v-4A7 7 0 0 0 7.808 4.394L6.383 2.968A8.962 8.962 0 0 1 12 1Zm-5 9a5 5 0 0 1 10 0v1h-2v-1a3 3 0 0 0-5.995-.176L9 10v6c0 1.567-.4 3.04-1.104 4.323l-.024.04c-.23.414-.491.808-.782 1.179a9.034 9.034 0 0 1-1.237-.97l-.308-.3A8.97 8.97 0 0 1 3 14v-4c0-2.125.736-4.078 1.968-5.617l1.426 1.425a6.966 6.966 0 0 0-1.39 3.951L5 10v4a6.97 6.97 0 0 0 1.57 4.417 6.91 6.91 0 0 0 .426-2.176L7 16v-6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFingerprint2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-fingerprint2line`, { [`${name}-spin`]: props.spin }]);

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

