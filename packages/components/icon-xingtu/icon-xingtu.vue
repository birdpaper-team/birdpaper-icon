<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M15.556 39 8.177 11.017a.458.458 0 0 1 .314-.561.386.386 0 0 1 .374.062l33.608 27.67a.472.472 0 0 1 .064.624.343.343 0 0 1-.311.188h-26.67ZM44.98 9.581a.458.458 0 0 0-.507-.575.42.42 0 0 0-.18.076l-18.117 12.49 12.995 10.68L44.98 9.58ZM2.188 38.189a.483.483 0 0 0-.124.623.441.441 0 0 0 .374.188h10.621l-1.812-7.058-9.06 6.247Z" :fill="color"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconXingtu',
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

    const iconClass = computed(() => [name, `${name}-xingtu`, { [`${name}-spin`]: props.spin }]);

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
