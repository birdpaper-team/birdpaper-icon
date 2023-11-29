<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M42 43V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v18" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="M24 22c-9.941 0-18 8.059-18 18v4h36v-4c0-9.941-8.059-18-18-18Z" stroke="#333" stroke-width="4"></path><path d="M8 31V8M16 24V14" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M31 14h11" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 42v-3c0-9.389 3.134-17 7-17s7 7.611 7 17v3" stroke="#333" stroke-width="4"></path><path d="M4 44h40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 35s10.35-1 17-1 17 1 17 1" stroke="#333" stroke-width="4"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSpaceColony',
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

    const iconClass = computed(() => [name, `${name}-space-colony`, { [`${name}-spin`]: props.spin }]);

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
