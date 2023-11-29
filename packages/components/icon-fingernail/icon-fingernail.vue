<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m38 9.472.343 1.056h1.11l-.898.652.343 1.056-.898-.652-.898.652.343-1.056-.898-.652h1.11L38 9.472Z" stroke="#333" stroke-width="4"></path><rect x="18" y="13" width="12" height="24" rx="6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M18 25c-2 0-5 2.118-5 6v9.784M30 25c2 0 5 2.118 5 6v9.5" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconFingernail',
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

    const iconClass = computed(() => [name, `${name}-fingernail`, { [`${name}-spin`]: props.spin }]);

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
