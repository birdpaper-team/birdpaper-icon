<template>
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" @click="onClick"><path d="M4 44h40M12 14h24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 14h20l.877 7.017c.082.654.228 1.298.436 1.922l3.334 10.003a10 10 0 0 1 .464 2.167L40 44H8l.889-8.89a10 10 0 0 1 .464-2.168l3.334-10.003c.208-.624.354-1.268.436-1.922L14 14Z" stroke="#333" stroke-width="4" stroke-linejoin="round"></path><path d="m24 8 .828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 31a7.012 7.012 0 0 0 4.272 6.448M31 31a7.013 7.013 0 0 1-4.272 6.448M18.934 26.17A6.98 6.98 0 0 1 24 24a6.98 6.98 0 0 1 5.067 2.17" stroke="#333" stroke-width="4" stroke-linecap="round"></path><circle cx="24" cy="31" r="2" fill="#333"></circle></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconNuclearPlant',
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

    const iconClass = computed(() => [name, `${name}-nuclear-plant`, { [`${name}-spin`]: props.spin }]);

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
