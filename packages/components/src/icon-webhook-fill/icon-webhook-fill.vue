<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13.501 4.399a3.002 3.002 0 0 1 1.382 3.436l1.92.56A5.002 5.002 0 0 0 7.67 4.498a5.002 5.002 0 0 0 1.014 6.243L6.803 14H6.8a2 2 0 1 0 1.946 1.537c-.082-.347-.102-.725.076-1.034l2.545-4.408-.866-.5a3 3 0 0 1 3-5.196Zm1.53 13.681a3.001 3.001 0 0 0 4.765-3.576 3 3 0 0 0-4.098-1.098l-.866.5-2.546-4.41c-.178-.308-.515-.48-.857-.582a2.003 2.003 0 0 1-1.16-2.917 2 2 0 0 1 3.464 2L13.731 8l1.883 3.26a5.002 5.002 0 0 1 4.084 9.074 5.002 5.002 0 0 1-6.112-.872l1.445-1.382ZM3.8 16c0-1.409.973-2.594 2.285-2.914l-.475-1.943A5.002 5.002 0 0 0 6.8 21a5.002 5.002 0 0 0 4.9-4h3.764l.002.004a2 2 0 1 0 .358-2.454c-.26.245-.577.45-.934.45H9.8v1a3 3 0 1 1-6 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWebhookFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-webhook-fill`, { [`${name}-spin`]: props.spin }]);

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

