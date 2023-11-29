<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M32 28h6v11a3 3 0 1 1-6 0V28Z" :stroke="color" stroke-width="4"></path><path d="M29 12h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H28" :stroke="color" stroke-width="4" stroke-linecap="round"></path><path d="M14 14h-2a6 6 0 0 0 0 12h2" :stroke="color" stroke-width="4" stroke-linejoin="round"></path><path d="M14.198 33a.198.198 0 0 1-.198-.198V6.198c0-.11.089-.198.198-.198H17.5C24.956 6 31 12.044 31 19.5S24.956 33 17.5 33h-3.302Z" :stroke="color" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconTrumpet',
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

    const iconClass = computed(() => [name, `${name}-trumpet`, { [`${name}-spin`]: props.spin }]);

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
