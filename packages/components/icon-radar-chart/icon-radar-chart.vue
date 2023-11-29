<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="m24 3 21.874 15.893L38 45H10L2.125 18.893 24 3Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m38 45-7-8M10 45l7-8M2 19l10 3M46 19l-10 3M24 3v10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="m24 13 6.007 4.57L36 22l-5 15H17l-5-15 5.993-4.43L24 13ZM7.594 14.92l-5.469 3.973 1.97 6.526M8.031 38.473 10 45h7M31 45h7l1.968-6.527M40.405 14.92l5.469 3.973-1.969 6.526M29.468 6.973 24 3 18.53 6.973" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconRadarChart',
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

    const iconClass = computed(() => [name, `${name}-radar-chart`, { [`${name}-spin`]: props.spin }]);

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
