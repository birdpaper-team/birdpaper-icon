<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M13 8c1.5 0 4.05 0 5.014 5.061C18.99 18.18 19.33 22.848 21 24M35 40c-1.5 0-4.05.001-5.014-5.061C29.01 29.82 28.67 25.152 27 24M13 40c1.5 0 4.05.001 5.014-5.061C18.99 29.82 19.33 25.152 21 24M35 8c-1.5 0-4.05 0-5.014 5.061C29.01 18.18 28.67 22.848 27 24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle r="4" transform="matrix(-1 0 0 1 21 24)" fill="#333"></circle><circle r="4" transform="matrix(-1 0 0 1 27 24)" fill="#333"></circle><path d="M21 24h-8M27 24h8M7 24H5M43 24h-2M7 8H5M43 8h-2M7 40H5M43 40h-2" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconLeftAndRightBranch',
  props: {
    /** 图标尺寸 */
    size: { type: String },
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

    const iconClass = computed(() => [name, `${name}-left-and-right-branch`, { [`${name}-spin`]: props.spin }]);

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
