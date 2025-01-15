<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6.167 4.367 12 1l5.833 3.367-2.144 1.244L12 3.488 8.312 5.61 6.167 4.367Zm11.666 4.246-2.144-1.244L12 9.492 8.312 7.37 6.167 8.613V11.1l3.689 2.123v4.246L12 18.713l2.145-1.244v-4.246l3.688-2.123V8.613Zm0 6.734v-2.488l-2.144 1.244v2.487l2.144-1.243Zm1.523.879-3.689 2.123v2.487L21.5 17.47v-6.734l-2.145 1.244v4.246ZM17.21 6.49l2.145 1.244v2.487L21.5 8.977V6.49l-2.145-1.244-2.144 1.244ZM9.856 19.25v2.487L12 22.981l2.145-1.244v-2.488L12 20.493 9.856 19.25Zm-3.689-3.903 2.145 1.243v-2.487l-2.145-1.244v2.488ZM9.856 6.49 12 7.734l2.145-1.244L12 5.246 9.856 6.49ZM4.644 7.734 6.79 6.49 4.644 5.246 2.5 6.49v2.487l2.144 1.244V7.734Zm0 4.246L2.5 10.736v6.733l5.833 3.367V18.35l-3.689-2.123V11.98Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBnbFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-bnb-fill`, { [`${name}-spin`]: props.spin }]);

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

