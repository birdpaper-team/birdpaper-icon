<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M4 4s6 6 20 6 20-6 20-6M24 10v6" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="30" cy="30" rx="8" ry="14" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></ellipse><ellipse cx="30" cy="30" rx="3" ry="6" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></ellipse><path d="M18 44c-4.418 0-8-6.268-8-14s3.582-14 8-14M30 16H18M30 44H18M22 29H10M23 22H12M23 37H12" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTireSwing',
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

    const iconClass = computed(() => [name, `${name}-tire-swing`, { [`${name}-spin`]: props.spin }]);

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
