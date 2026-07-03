<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.929 4.93a9.977 9.977 0 0 1 7.682-2.912c.38.023.567.468.416.817A3.502 3.502 0 0 0 15.77 7.69a.637.637 0 0 1 .541.54 3.5 3.5 0 0 0 4.852 2.742c.35-.15.795.036.818.417a9.975 9.975 0 0 1-2.91 7.683c-3.906 3.905-10.237 3.905-14.142 0-3.905-3.906-3.905-10.237 0-14.142Zm4.95 9.191a1.5 1.5 0 1 0-2.122 2.122 1.5 1.5 0 0 0 2.121-2.122Zm6.01-.353a1.5 1.5 0 1 0-2.121 2.121 1.5 1.5 0 0 0 2.12-2.121ZM10.232 8.11a1.5 1.5 0 1 0-2.121 2.121 1.5 1.5 0 0 0 2.12-2.121Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCookieFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-cookie-fill`, { [`${name}-spin`]: props.spin }]);

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

