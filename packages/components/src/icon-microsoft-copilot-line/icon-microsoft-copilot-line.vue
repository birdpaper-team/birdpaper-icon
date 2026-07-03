<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.63 2.863a2.829 2.829 0 0 1 2.45 1.903l.548 1.602.002.005c.104.308.385.521.763.525h.655c1.077 0 1.98.322 2.59 1.04.58.683.75 1.562.761 2.37.022 1.59-.574 3.535-1.023 5.005-.4 1.306-.923 2.7-1.641 3.784-.71 1.07-1.756 2.048-3.232 2.048h-.001l-6.911-.007v-.001a2.827 2.827 0 0 1-2.674-1.91l-.002-.005-.533-1.585a.786.786 0 0 0-.636-.524l-.124-.01H5.62v-.001h-.666c-1.076 0-1.98-.321-2.59-1.038-.58-.684-.75-1.563-.762-2.37-.023-1.591.572-3.535 1.022-5.007.399-1.305.922-2.699 1.64-3.783.709-1.07 1.755-2.05 3.232-2.05h6.908l.225.01ZM18.837 8.9h-2.678l-.097.01c-.228.044-.468.232-.56.577-.371 1.395-.982 3.668-1.55 5.755l-.013.052-.02.049c-.396 1.018-1.352 1.76-2.493 1.76H8.311l.497 1.476c.115.335.43.56.783.56h.001l6.91.006c.482 0 1.003-.301 1.566-1.152.555-.838 1.01-2.008 1.395-3.264.478-1.564.953-3.18.936-4.392-.008-.593-.136-.926-.286-1.104-.122-.143-.385-.333-1.064-.334h-.212V8.9ZM7.497 4.854c-.482 0-1.002.304-1.565 1.154-.555.838-1.011 2.007-1.395 3.263-.478 1.565-.952 3.181-.935 4.393.009.593.137.926.288 1.104.122.143.385.333 1.065.334h2.887c.254-.003.553-.193.658-.587.37-1.395.98-3.668 1.549-5.755l.013-.051.02-.05c.396-1.018 1.352-1.76 2.493-1.76h3.12l-.508-1.485a.828.828 0 0 0-.782-.56H7.497ZM12.575 8.9c-.226 0-.483.146-.616.455-.562 2.065-1.16 4.3-1.527 5.675-.006.025-.015.05-.022.073h1.016c.226 0 .483-.147.616-.457.56-2.063 1.16-4.296 1.526-5.672l.023-.074h-1.016Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMicrosoftCopilotLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-microsoft-copilot-line`, { [`${name}-spin`]: props.spin }]);

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

