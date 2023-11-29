<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M24 25V7.5c0-1.281.5-3.5 3-3.5s3 2.219 3 3.5V30l7-7c1.297-1.297 3.078-1.922 4.5-.5 1.422 1.422 1.594 2.906 0 4.5L35 33.5S29.094 44 26 44H13s-3 0-5-2-2-4.5-2-4.5V12.781C6 12.062 6.5 10 9 10s3 2 3 2.781V25" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><rect x="12" y="19" width="6" height="12" rx="3" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect><rect x="18" y="19" width="6" height="12" rx="3" stroke="#333" stroke-width="4" stroke-linejoin="round"></rect></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRockGesture',
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

    const iconClass = computed(() => [name, `${name}-rock-gesture`, { [`${name}-spin`]: props.spin }]);

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
