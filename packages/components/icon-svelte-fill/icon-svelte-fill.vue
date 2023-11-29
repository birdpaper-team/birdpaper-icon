<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.99 1.974c2.92-1.86 6.957-.993 9.001 1.933a6.268 6.268 0 0 1 1.072 4.74 5.9 5.9 0 0 1-.88 2.199c.64 1.22.855 2.62.61 3.977a5.882 5.882 0 0 1-2.657 3.94l-5.127 3.267c-2.92 1.86-6.957.993-9.002-1.933a6.269 6.269 0 0 1-1.07-4.74 5.898 5.898 0 0 1 .88-2.199 6.195 6.195 0 0 1-.611-3.977 5.881 5.881 0 0 1 2.658-3.94l5.126-3.267ZM8.049 20.249c.782.29 1.633.333 2.44.123.369-.098.72-.253 1.042-.458l5.128-3.266a3.538 3.538 0 0 0 1.598-2.37 3.769 3.769 0 0 0-.645-2.85 4.072 4.072 0 0 0-4.37-1.62c-.369.098-.72.252-1.042.457l-1.957 1.247a1.137 1.137 0 0 1-.314.138 1.227 1.227 0 0 1-1.5-.9 1.138 1.138 0 0 1-.01-.449 1.066 1.066 0 0 1 .48-.713l5.129-3.269a1.13 1.13 0 0 1 .314-.137 1.227 1.227 0 0 1 1.317.488c.157.222.23.492.207.763l-.018.19.191.058c.72.217 1.399.556 2.005 1.002l.263.193.096-.295c.052-.157.093-.317.123-.479a3.769 3.769 0 0 0-.644-2.85 4.073 4.073 0 0 0-4.371-1.62 3.74 3.74 0 0 0-1.042.457L7.34 7.357a3.537 3.537 0 0 0-1.6 2.369 3.768 3.768 0 0 0 .645 2.85 4.073 4.073 0 0 0 4.371 1.62c.369-.098.72-.252 1.042-.457l1.956-1.247c.098-.062.204-.108.315-.138a1.228 1.228 0 0 1 1.5.9c.034.147.037.3.011.448a1.068 1.068 0 0 1-.482.714l-5.127 3.268a1.131 1.131 0 0 1-.314.138 1.227 1.227 0 0 1-1.317-.489 1.149 1.149 0 0 1-.207-.761l.017-.19-.19-.059a6.61 6.61 0 0 1-2.005-1.002l-.263-.193-.096.295a3.566 3.566 0 0 0-.123.479 3.77 3.77 0 0 0 .644 2.85 4.073 4.073 0 0 0 1.93 1.497Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSvelteFill',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
    /** 旋转角度 */
    rotate: { type: Number },
    /** 是否旋转 */
    spin: { type: Boolean },
  },
  emits: {
    click: (ev: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const name = 'bp-icon';

    const iconClass = computed(() => [name, `${name}-svelte-fill`, { [`${name}-spin`]: props.spin }]);

    const innerStyle = computed(() => {
      const styles: CSSProperties = {};
        props.size && (styles.width = props.size);
        props.size && (styles.height = props.size);
        props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);

        return styles;
    });

    const onClick = (ev: MouseEvent) => {
      emit('click', ev);
    };

    return {
      iconClass,
      innerStyle,
      onClick,
    };
  }
});
</script>
