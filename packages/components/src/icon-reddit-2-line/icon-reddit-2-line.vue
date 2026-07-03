<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16.597 2.287a2.08 2.08 0 1 1-2.023 2.562 2.483 2.483 0 0 0-1.942 1.47c1.722.087 3.329.533 4.686 1.255a3.907 3.907 0 0 1 1.809-.443l.202.005a3.936 3.936 0 0 1 3.733 3.93 3.923 3.923 0 0 1-1.726 3.25c-.233 1.84-1.327 3.43-2.867 4.564-1.699 1.25-3.983 1.994-6.462 1.994-2.477 0-4.76-.742-6.458-1.991-1.54-1.132-2.635-2.719-2.87-4.556a3.924 3.924 0 0 1-1.741-3.26A3.937 3.937 0 0 1 4.873 7.13l.337.015c.53.045 1.029.198 1.476.432 1.437-.765 3.152-1.222 4.989-1.271A3.39 3.39 0 0 1 14.56 3.94a2.081 2.081 0 0 1 2.037-1.653Zm-4.59 6.015c-1.857 0-3.534.496-4.816 1.292l-.588.366-.55-.424a1.923 1.923 0 0 0-1.015-.398l-.164-.007c-1.07 0-1.936.867-1.936 1.935 0 .724.398 1.356.995 1.689l.122.062.557.262.018.615c.037 1.328.779 2.603 2.103 3.577 1.324.974 3.183 1.603 5.274 1.603 2.092 0 3.952-.63 5.276-1.604 1.324-.976 2.065-2.252 2.1-3.58l.017-.614.554-.264a1.933 1.933 0 0 0-.629-3.671l-.198-.01a1.92 1.92 0 0 0-1.176.401l-.549.421-.587-.364c-1.28-.793-2.955-1.287-4.808-1.287Zm0 6.949c1.02 0 1.996.05 2.9.142a.232.232 0 0 1 .193.319 3.352 3.352 0 0 1-6.186 0 .232.232 0 0 1 .191-.32 28.823 28.823 0 0 1 2.902-.141Zm-3.88-4.202c.824 0 1.451.882 1.402 1.94-.049 1.056-.755 1.44-1.578 1.44-.823 0-1.45-.575-1.402-1.631.049-1.057.756-1.75 1.579-1.75Zm7.76 0c.823 0 1.529.692 1.578 1.749.049 1.057-.579 1.63-1.401 1.63-.823 0-1.53-.384-1.579-1.44-.048-1.058.579-1.939 1.402-1.94Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconReddit2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-reddit2line`, { [`${name}-spin`]: props.spin }]);

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

