<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.271 14.669a.661.661 0 0 1-.88-.269l-.043-.095-1.818-3.998a.473.473 0 0 1 0-.146.327.327 0 0 1 .335-.327.305.305 0 0 1 .196.066l2.18 1.527a.988.988 0 0 0 .546.167.894.894 0 0 0 .342-.066l10.047-4.5a10.73 10.73 0 0 0-8.171-3.526C6.479 3.502 2 7.232 2 11.87a7.83 7.83 0 0 0 3.46 6.296.662.662 0 0 1 .24.727l-.45 1.701a.945.945 0 0 0-.051.24.327.327 0 0 0 .334.334.416.416 0 0 0 .19-.058l2.18-1.265c.16-.098.343-.151.53-.152.1 0 .198.014.292.043 1.062.3 2.16.452 3.264.45 5.525 0 10.011-3.729 10.011-8.33a7.228 7.228 0 0 0-1.098-3.883L9.351 14.625l-.08.044Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWechatPayFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-wechat-pay-fill`, { [`${name}-spin`]: props.spin }]);

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

