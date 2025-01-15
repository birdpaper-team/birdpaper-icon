<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.454 4.414a8 8 0 1 0 10.202 9.91c-3.4 1.46-7.248 1.98-11.545 1.565-.711-4.125-.264-7.95 1.343-11.475ZM11.902 4a16.806 16.806 0 0 0-1.541 3.768 5.98 5.98 0 0 1 4.114 1.756 5.978 5.978 0 0 1 1.745 3.861c1.33-.341 2.589-.82 3.78-1.433A7.994 7.994 0 0 0 11.902 4ZM4.93 19.07c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0Zm5.02-9.293a17.885 17.885 0 0 0-.076 4.229 23.142 23.142 0 0 0 4.36-.219 3.988 3.988 0 0 0-1.172-2.849 3.99 3.99 0 0 0-3.112-1.161Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCoreosLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-coreos-line`, { [`${name}-spin`]: props.spin }]);

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

