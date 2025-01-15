<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 4c-2.761 0-5 2.686-5 6s2.239 6 5 6 5-2.686 5-6-2.239-6-5-6Zm2.325 3.472c.422.69.675 1.57.675 2.528 0 2.21-1.343 4-3 4-.441 0-.86-.127-1.237-.355l3.562-6.173ZM12 8c.441 0 .86.127 1.237.355l-3.562 6.173C9.253 13.838 9 12.958 9 12c0-2.21 1.343-4 3-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCreativeCommonsZeroFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-creative-commons-zero-fill`, { [`${name}-spin`]: props.spin }]);

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

