<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9.303l2.021 9.51a1 1 0 0 0 1.186.77l2.935-.623a1 1 0 0 0 .77-1.186l-2.91-13.694a1 1 0 0 0-1.187-.77L15 5.302V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1-1H4Zm5 3h4v8H9V6Zm4 10v3H9v-3h4Zm-6 1v2H5v-2h2Zm11.77 1.814-.416-1.956.978-.208.416 1.956-.978.208Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBookShelfFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-book-shelf-fill`, { [`${name}-spin`]: props.spin }]);

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

