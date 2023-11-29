<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path stroke="#333" stroke-width="4" stroke-linejoin="round" d="M6 16h8v16H6z"></path><path d="M10 6v10M10 32v10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path stroke="#333" stroke-width="4" stroke-linejoin="round" d="M34 16h8v16h-8z"></path><path d="M38 6v10M38 32v10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path stroke="#333" stroke-width="4" stroke-linejoin="round" d="M20 14h8v16h-8z"></path><path d="M24 4v10M24 30v10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconChartStock',
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

    const iconClass = computed(() => [name, `${name}-chart-stock`, { [`${name}-spin`]: props.spin }]);

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
