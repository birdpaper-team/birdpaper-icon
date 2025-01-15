<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.765 19.225c.59-.26 1.25-.309 1.868-.139.77.21 1.565.316 2.368.314 4.585 0 8-3.287 8-7.7s-3.415-7.7-8-7.7-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006l.356-.157ZM12.001 2c5.633 0 10 4.127 10 9.7 0 5.573-4.367 9.7-10 9.7a10.893 10.893 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.985.876a.8.8 0 0 1-1.123-.707l-.054-1.78a.797.797 0 0 0-.269-.57c-1.945-1.74-3.14-4.258-3.14-7.174 0-5.573 4.366-9.7 10-9.7ZM5.996 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.396c.421-.319.971.185.689.633l-2.938 4.66a1.5 1.5 0 0 1-2.168.4l-2.337-1.75a.6.6 0 0 0-.723 0l-3.155 2.395c-.421.319-.971-.185-.689-.633Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMessengerLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-messenger-line`, { [`${name}-spin`]: props.spin }]);

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

