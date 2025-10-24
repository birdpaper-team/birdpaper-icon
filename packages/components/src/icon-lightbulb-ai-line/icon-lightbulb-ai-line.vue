<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.339 2.009 12 4a6 6 0 0 0-4.686 9.748c.086.107.806.853.917.974.997 1.084 1.61 2.076 1.742 3.278h4.054c.132-1.201.745-2.194 1.74-3.277.113-.122.83-.866.917-.973A5.966 5.966 0 0 0 18 10l1.99-.34c.005.113.01.226.01.34a7.966 7.966 0 0 1-1.756 5.001C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5c0-1.5-1.625-2.727-2.246-3.501a8 8 0 0 1 6.585-12.99ZM10 21h4v-1h-4v1ZM17.53.328a.507.507 0 0 1 .94 0l.254.612a4.367 4.367 0 0 0 2.25 2.326l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.218 2.251l-.247.565a.506.506 0 0 1-.934 0l-.246-.565a4.364 4.364 0 0 0-2.22-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32A4.366 4.366 0 0 0 17.276.94l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLightbulbAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-lightbulb-ai-line`, { [`${name}-spin`]: props.spin }]);

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

