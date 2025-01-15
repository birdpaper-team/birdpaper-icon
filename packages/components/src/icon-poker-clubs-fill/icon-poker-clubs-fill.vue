<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13.775 11.04C14.933 9.266 16 7.632 16 6a4 4 0 0 0-8 0c0 1.633 1.067 3.267 2.225 5.04h.001l.234.359c-.29-.22-.557-.43-.808-.626C8.276 9.697 7.386 9 6 9a4 4 0 0 0 0 8c1.633 0 3.267-1.067 5.04-2.225l.03-.02c-.093 2.281-.958 3.683-1.913 5.23l-.369.602c-.384.636.087 1.413.83 1.413h4.764c.743 0 1.214-.777.83-1.413a72.98 72.98 0 0 0-.369-.602c-.955-1.547-1.82-2.949-1.913-5.23l.03.02C14.734 15.933 16.368 17 18 17a4 4 0 0 0 0-8c-1.386 0-2.276.697-3.652 1.773-.251.197-.518.406-.808.626l.235-.36Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPokerClubsFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-poker-clubs-fill`, { [`${name}-spin`]: props.spin }]);

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

