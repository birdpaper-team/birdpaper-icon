<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.592 9.873c-.3 0-.595.074-.888.221a1.85 1.85 0 0 0-.724.663c-.192.294-.287.645-.287 1.053v4.401H7.554V7.912H9.64v1.194h.039c.279-.383.63-.698 1.053-.946a2.83 2.83 0 0 1 1.457-.372c.19 0 .372.015.542.046.17.032.297.065.38.102l-.86 2.053a.85.85 0 0 0-.271-.081 2.081 2.081 0 0 0-.388-.036l.001.001ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-2 0a7.966 7.966 0 0 0-1.846-5.104L14.2 16.21h-2.172L16.592 5.46A7.947 7.947 0 0 0 12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSubredditLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-subreddit-line`, { [`${name}-spin`]: props.spin }]);

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

