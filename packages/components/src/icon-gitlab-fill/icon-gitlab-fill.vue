<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m21.663 9.987-.028-.072-2.719-7.094a.71.71 0 0 0-.706-.449.711.711 0 0 0-.654.522L15.72 8.52H8.282L6.443 2.895a.711.711 0 0 0-.652-.524.72.72 0 0 0-.707.45L2.362 9.925l-.028.07a5.057 5.057 0 0 0 1.674 5.838l.01.007.024.019 4.147 3.104 2.05 1.553 1.247.944a.842.842 0 0 0 1.016 0l1.247-.944 2.05-1.553 4.172-3.123.01-.008a5.055 5.055 0 0 0 1.682-5.845Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGitlabFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-gitlab-fill`, { [`${name}-spin`]: props.spin }]);

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

