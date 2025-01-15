<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 2.598V13.97H3.9c-.67 0-1.07-.784-.643-1.336L11 2.598Zm2 5.433V2.333c0-1.811-2.297-2.624-3.418-1.171L1.673 11.41C.246 13.26 1.548 15.969 3.9 15.969H11v5.698c0 1.811 2.296 2.624 3.418 1.171l7.908-10.249c1.427-1.849.126-4.558-2.227-4.558H13Zm0 2h7.1c.669 0 1.069.784.643 1.336L13 21.402V10.03Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSupabaseLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-supabase-line`, { [`${name}-spin`]: props.spin }]);

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

