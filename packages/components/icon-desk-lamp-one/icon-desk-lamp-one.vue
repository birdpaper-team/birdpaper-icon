<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M6 40.999h36M39 18.999v22M27 13.999l12 10" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.34 14.577a4.43 4.43 0 0 0 .567-.794c1.182-2.115.45-4.982-1.6-6.204-2.048-1.22-4.819-.44-6.003 1.673-.187.334-.29.595-.384.904-3.576-.276-7.007 1.475-8.92 4.895L26.694 25c1.913-3.42 1.666-7.364-.354-10.423Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconDeskLampOne',
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

    const iconClass = computed(() => [name, `${name}-desk-lamp-one`, { [`${name}-spin`]: props.spin }]);

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
