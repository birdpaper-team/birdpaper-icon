<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.663 10.84a.526.526 0 0 1-.524.526h-1.463v.937h1.463a.525.525 0 1 1 0 1.05H16.15a.526.526 0 0 1-.522-.525V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938h1.463c.29 0 .524.237.524.526Zm-4.097 2.485a.539.539 0 0 1-.166.026.515.515 0 0 1-.425-.209l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.087.412.212l2.052 2.775V8.852c0-.287.235-.525.525-.525.287 0 .525.238.525.525v3.976a.525.525 0 0 1-.36.497Zm-4.95.027a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525.289 0 .524.238.524.525v3.976a.527.527 0 0 1-.526.524Zm-1.53 0H6.099a.528.528 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525.29 0 .525.238.525.525v3.451h1.464a.525.525 0 0 1 0 1.05Zm3.915-10.78c-5.513 0-10 3.643-10 8.119 0 4.009 3.558 7.368 8.363 8.006.325.069.769.215.881.492.1.25.066.638.032.9l-.137.85c-.037.25-.2.988.874.537 1.076-.449 5.764-3.398 7.864-5.812C21.314 14.09 22 12.477 22 10.69c0-4.476-4.488-8.119-10-8.119Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLineFill',
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

    const iconClass = computed(() => [name, `${name}-line-fill`, { [`${name}-spin`]: props.spin }]);

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
