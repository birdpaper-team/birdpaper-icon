<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.705 17.793c.827.827 1.588 1.207 2.293 1.207.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572 1.214 0 2.379.545 3.486 1.58l.221.213-1.414 1.414C20.464 20.38 19.703 20 18.998 20c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572-1.214 0-2.379-.545-3.486-1.58l-.221-.213 1.414-1.414ZM8.998 3a3 3 0 1 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9a2 2 0 0 0-1.994 1.85l-.006.15v7h-4a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6Zm3.707 10.793c.827.827 1.588 1.207 2.293 1.207.378 0 .68-.067 1.237-.276l.392-.152c1.05-.421 1.58-.572 2.371-.572 1.214 0 2.379.545 3.486 1.58l.221.213-1.414 1.414C20.464 16.38 19.703 16 18.998 16c-.378 0-.68.067-1.237.276l-.392.152c-1.05.421-1.58.572-2.371.572-1.214 0-2.379-.545-3.486-1.58l-.221-.213 1.414-1.414Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTShirtAirFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-tshirt-air-fill`, { [`${name}-spin`]: props.spin }]);

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

