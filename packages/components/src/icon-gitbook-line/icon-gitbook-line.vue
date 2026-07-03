<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.98 2.638a1 1 0 0 1 1.019.004l7.513 4.495a1 1 0 0 1 0 1.716l-7.513 4.495a1 1 0 0 1-1.026 0L7.82 10.863a2.5 2.5 0 0 0-3.686 1.621c-.088.392-.027.973.26 1.617.07.16.15.315.24.466a4.59 4.59 0 0 0 1.625 1.601l.008.004 5.202 3.052a2.013 2.013 0 0 0 2.035 0L20 15.412V13.51l-6.999 4.208a1 1 0 0 1-1.026.003l-5.748-3.418a1 1 0 0 1 1.022-1.719l5.234 3.111 8.001-4.81A1 1 0 0 1 22 11.74v4.245c0 .355-.188.684-.494.864l-6.99 4.1a4.013 4.013 0 0 1-4.06 0l-5.202-3.052a6.668 6.668 0 0 1-.374-.233l-.037-.025a6.464 6.464 0 0 1-2.03-2.229c-.032-.06-.066-.118-.096-.178l-.028-.058a6.42 6.42 0 0 1-.107-.229c-.024-.053-.048-.105-.07-.159a6.445 6.445 0 0 1 .358-5.753c.635-1.108 1.592-1.986 2.661-2.613l6.449-3.782ZM6.542 8.146c-.228.133-.444.28-.647.437a4.478 4.478 0 0 1 2.725.44l.204.11.013.009 3.647 2.182 5.566-3.33-5.57-3.332-5.938 3.484Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGitbookLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-gitbook-line`, { [`${name}-spin`]: props.spin }]);

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

