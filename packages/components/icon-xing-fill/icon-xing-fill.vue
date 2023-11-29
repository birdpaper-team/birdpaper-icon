<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20.462 3.23c.154 0 .308.077.384.154a.49.49 0 0 1 0 .462l-6.076 10.77 3.846 7.076a.49.49 0 0 1 0 .462.587.587 0 0 1-.385.153h-2.77c-.384 0-.614-.307-.768-.538l-3.923-7.154C11 14.307 16.924 3.77 16.924 3.77c.153-.308.384-.539.769-.539h2.769ZM8.923 7c.385 0 .616.307.77.538l1.923 3.308c-.154.154-3 5.23-3 5.23-.154.231-.385.54-.77.54H5.155a.587.587 0 0 1-.384-.155.49.49 0 0 1 0-.461l2.846-5.154-1.846-3.23a.49.49 0 0 1 0-.462A.588.588 0 0 1 6.154 7h2.77Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconXingFill',
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

    const iconClass = computed(() => [name, `${name}-xing-fill`, { [`${name}-spin`]: props.spin }]);

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
