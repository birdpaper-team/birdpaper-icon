<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.998 2v1.278l5 1.668 3.633-1.21.632 1.896-3.031 1.011 3.095 8.512A5.983 5.983 0 0 1 17.998 17a5.983 5.983 0 0 1-4.328-1.845l3.094-8.512-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.983 5.983 0 0 1 6 17a5.983 5.983 0 0 1-4.33-1.845l3.095-8.512-3.03-1.01.632-1.898L6 4.945l4.999-1.667V2h2Zm5 7.103L16.581 13h2.835l-1.418-3.897Zm-12 0L4.582 13h2.835L5.999 9.103Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconScales3Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-scales3fill`, { [`${name}-spin`]: props.spin }]);

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

