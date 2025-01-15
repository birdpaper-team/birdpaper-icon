<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m2.808 1.393 18.384 18.385-1.414 1.414-3.746-3.747L12 21.485l-8.478-8.492a6 6 0 0 1 .033-8.023L1.394 2.808l1.414-1.415Zm2.172 10.23L12 18.654l2.618-2.623-9.646-9.645a4 4 0 0 0 .008 5.237Zm15.263-6.866a6 6 0 0 1 .236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a4 4 0 0 0-5.683-5.606l-1.335 1.198-1.336-1.197a3.974 3.974 0 0 0-1.155-.723l-2.25-2.25A5.99 5.99 0 0 1 12 4.53a5.998 5.998 0 0 1 8.242.228Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDislikeLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-dislike-line`, { [`${name}-spin`]: props.spin }]);

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

