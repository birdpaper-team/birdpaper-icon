<template>
  <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24.778 7c-11.046 0-20 8.954-20 20 0 5.23 1.713 10.436 5 14h30c3.286-3.564 5-8.77 5-14 0-11.046-8.954-20-20-20Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="24.778" cy="30" r="4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M24.778 20v6M24.778 12v2M9.778 28h2M13.778 18l1.414 1.414M37.778 28h2M34.778 19.414 36.192 18" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDashboardOne',
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

    const iconClass = computed(() => [name, `${name}-dashboard-one`, { [`${name}-spin`]: props.spin }]);

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
