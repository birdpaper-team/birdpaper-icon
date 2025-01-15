<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10a9.959 9.959 0 0 1-1.065 4.496 1.975 1.975 0 0 0-.398-.775l-.123-.135L19 14.172l-1.414 1.414-.117.127a2 2 0 0 0 1.679 3.282A9.974 9.974 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm0 13c-1.38 0-2.63.56-3.534 1.463l-.166.174.945.86C10.035 17.182 10.982 17 12 17c.905 0 1.754.144 2.486.396l.269.1.945-.86A4.987 4.987 0 0 0 12 15Zm-3.5-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconEmotionSadFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-emotion-sad-fill`, { [`${name}-spin`]: props.spin }]);

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

