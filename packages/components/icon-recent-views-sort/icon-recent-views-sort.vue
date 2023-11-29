<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6 5v25h36V5M30 37l-6 6-6-6M24 30v13" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 21c4.05 0 7.717-2 11-6-3.283-4-6.95-6-11-6s-7.717 2-11 6c3.283 4 6.95 6 11 6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M24 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="color"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRecentViewsSort',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    color: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-recent-views-sort`, { [`${name}-spin`]: props.spin }]);

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
