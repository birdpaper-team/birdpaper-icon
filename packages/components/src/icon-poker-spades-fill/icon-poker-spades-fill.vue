<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.951 15.893A5.826 5.826 0 0 1 7.5 17C4.462 17 2 14.761 2 12c0-3.548 3.525-6.089 6.644-8.338C9.92 2.742 11.129 1.872 12 1c.871.871 2.08 1.742 3.356 2.662C18.476 5.911 22 8.452 22 12c0 2.761-2.462 5-5.5 5a5.826 5.826 0 0 1-3.451-1.107c.284 1.646 1.009 2.82 1.794 4.092l.369.602c.384.636-.087 1.413-.83 1.413H9.618c-.743 0-1.214-.777-.83-1.413l.369-.602c.785-1.272 1.51-2.446 1.794-4.092Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPokerSpadesFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-poker-spades-fill`, { [`${name}-spin`]: props.spin }]);

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

