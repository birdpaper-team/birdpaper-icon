<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.42 12.535c.98.592 1.47.888 2.007.888.538 0 1.028-.294 2.008-.884l6.236-3.753a.96.96 0 0 0 .456-.824.96.96 0 0 0-.456-.824l-6.238-3.754c-.98-.59-1.469-.884-2.006-.884-.537 0-1.027.295-2.005.886L5.06 6.616l-.085.053C3.146 7.792 2.017 9.837 2 12.055v.206c.016 2.215 1.144 4.258 2.97 5.382l.086.052 3.352 2.026c1.961 1.186 2.942 1.778 4.02 1.779 1.076 0 2.057-.591 4.02-1.776l3.542-2.138c.98-.592 1.471-.888 1.74-1.376.27-.487.27-1.079.27-2.263v-2.294a.914.914 0 0 0-.433-.784.834.834 0 0 0-.865 0l-7.273 4.376c-.49.294-.734.441-1.002.441s-.513-.146-1.002-.44l-4.921-2.958c-.248-.148-.37-.223-.47-.236a.5.5 0 0 0-.53.322c-.037.097-.037.246-.035.545 0 .219.001.328.021.43.044.225.157.429.323.58.074.068.165.123.346.232l5.263 3.18c.49.297.736.445 1.005.445.27 0 .514-.148 1.005-.444l6.45-3.893c.168-.101.252-.151.315-.114.063.038.063.14.063.342v1.04c0 .295 0 .443-.068.565-.067.122-.19.196-.435.344l-5.32 3.21c-.98.593-1.471.889-2.01.888-.538 0-1.03-.297-2.01-.89l-4.975-3.008-.035-.021c-1.042-.64-1.685-1.805-1.692-3.068v-.998c0-.698.355-1.342.932-1.693a1.586 1.586 0 0 1 1.653-.001l4.12 2.49Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGitbookFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-gitbook-fill`, { [`${name}-spin`]: props.spin }]);

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

