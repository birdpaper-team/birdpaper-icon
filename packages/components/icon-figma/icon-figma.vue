<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><rect x="6" y="6" width="36" height="36" rx="3" :stroke="color" stroke-width="4" stroke-linejoin="round"></rect><path d="M18 18a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3ZM18 24a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3ZM18 30a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0ZM24 15h3a3 3 0 1 1 0 6h-3v-6Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M24 24a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" :stroke="color" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFigma',
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

    const iconClass = computed(() => [name, `${name}-figma`, { [`${name}-spin`]: props.spin }]);

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
