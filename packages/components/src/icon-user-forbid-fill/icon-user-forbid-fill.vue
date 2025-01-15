<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 13a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm3 5a3 3 0 0 1 4.293-2.708l-4 4.001A2.988 2.988 0 0 1 15 18Zm1.707 2.708 4-4.001a3 3 0 0 1-4.001 4.001ZM18 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-6 1c.084 0 .168.001.252.004A6.968 6.968 0 0 0 11 18c0 1.487.464 2.866 1.255 4H4a8 8 0 0 1 8-8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconUserForbidFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-user-forbid-fill`, { [`${name}-spin`]: props.spin }]);

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

