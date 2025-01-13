<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13.41 12.007c0 3.45-2.779 6.247-6.205 6.247C3.778 18.254 1 15.458 1 12.007 1 8.557 3.778 5.76 7.205 5.76c3.426 0 6.204 2.797 6.204 6.247Zm6.806 0c0 3.248-1.39 5.88-3.102 5.88-1.714 0-3.103-2.633-3.103-5.88s1.39-5.88 3.103-5.88c1.713 0 3.102 2.633 3.102 5.88Zm2.784 0c0 2.91-.489 5.269-1.091 5.269-.603 0-1.091-2.36-1.091-5.269 0-2.91.488-5.269 1.091-5.269S23 9.098 23 12.008Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconMediumFill",
});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  rotate: { type: Number },
  spin: { type: Boolean },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-zcool-line`, { [`${name}-spin`]: props.spin }]);

const innerStyle = computed(() => {
  const styles: CSSProperties = {};
  props.size && (styles.width = props.size);
  props.size && (styles.height = props.size);
  props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);

  return styles;
});

const onClick = (ev: MouseEvent) => emits("click", ev);
</script>

