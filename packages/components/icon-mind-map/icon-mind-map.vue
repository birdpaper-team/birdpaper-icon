<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18 3a3 3 0 1 1 0 6h-3a3.001 3.001 0 0 1-2.829-2H11c-1.1 0-2 .9-2 2v.171a3.001 3.001 0 0 1 0 5.658V15c0 1.1.9 2 2 2h1.17A3.001 3.001 0 0 1 15 15h3a3 3 0 1 1 0 6h-3a3.001 3.001 0 0 1-2.829-2H11c-2.21 0-4-1.79-4-4H5a3 3 0 1 1 0-6h2a4 4 0 0 1 4-4h1.17A3.001 3.001 0 0 1 15 3h3Zm0 14h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2ZM8 11H5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Zm10-6h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconMindMap',
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

    const iconClass = computed(() => [name, `${name}-mind-map`, { [`${name}-spin`]: props.spin }]);

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
