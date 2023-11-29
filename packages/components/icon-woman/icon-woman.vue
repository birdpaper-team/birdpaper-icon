<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M32.485 24.485A11.962 11.962 0 0 0 36 16c0-6.627-5.373-12-12-12S12 9.373 12 16c0 3.314 1.343 6.314 3.515 8.485" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="m6 44 1-5 11-8 6 6 6-6 11 8 1 5" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.993 21.007c.013-4.11.682-7.113 2.007-9.007 1.988-2.841 3.387-2.632 4.405-2.19 1.019.443 1.618 3.334 3.319 4.168 1.7.833 6.054.936 7.545 1.939 1.49 1.002 4.9 2.867 4.05 6.051" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconWoman',
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

    const iconClass = computed(() => [name, `${name}-woman`, { [`${name}-spin`]: props.spin }]);

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
