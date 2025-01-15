<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 2.535A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5c0 1.561.795 2.936 2 3.742V17.5a4.5 4.5 0 0 0 7 3.742V17.5c0-1.333-.33-2.185-.86-2.76-.543-.587-1.424-1.024-2.804-1.254l.328-1.972c1.302.216 2.442.623 3.336 1.313V2.535Zm2 0v10.292c.894-.69 2.034-1.097 3.336-1.313l.328 1.972c-1.38.23-2.261.667-2.804 1.255-.53.574-.86 1.426-.86 2.759v3.742a4.5 4.5 0 0 0 7-3.742v-1.258c1.205-.806 2-2.18 2-3.742 0-1.165-.292-2.258-.941-3.15-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-6-3.465Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrainFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brain-fill`, { [`${name}-spin`]: props.spin }]);

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

