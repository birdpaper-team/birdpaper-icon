<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.001 20.003V14.67h2v7.333h-16V14.67h2v5.333h12ZM7.6 14.736l.313-1.979 8.837 1.7-.113 1.586L7.6 14.736Zm1.2-4.531.732-1.6 7.998 3.732-.733 1.6-7.998-3.732Zm2.265-3.932 1.133-1.333 6.798 5.664-1.133 1.333-6.798-5.664Zm4.332-4.132 5.265 7.064-1.4 1.066-5.264-7.064 1.4-1.066ZM7.333 18.668V16.67h9.33v2h-9.33Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconStackOverflowFill',
  props: {
    /** 图标尺寸 */
    size: { type: String, default: "18px" },
    /** 颜色 */
    fill: { type: String, default: "#595959" },
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

    const iconClass = computed(() => [name, `${name}-stack-overflow-fill`, { [`${name}-spin`]: props.spin }]);

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
