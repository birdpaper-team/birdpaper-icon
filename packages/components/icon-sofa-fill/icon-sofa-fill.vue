<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15 3H9a6.002 6.002 0 0 0-5.92 5.02A4.5 4.5 0 0 1 8 12.5V14h8v-1.5a4.5 4.5 0 0 1 4.92-4.48A6.002 6.002 0 0 0 15 3Zm6 7.05a2.5 2.5 0 0 0-3 2.45V17h-2v-1H8v1H6v-4.5a2.5 2.5 0 0 0-5 0c0 .589.182 1.039.39 1.555.28.696.61 1.51.61 2.945v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3c0-1.434.33-2.25.61-2.945.208-.516.39-.966.39-1.555a2.5 2.5 0 0 0-2-2.45Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconSofaFill',
  props: {
    /** 图标尺寸 */
    size: { type: String },
    /** 颜色 */
    fill: { type: String, default: "#333" },
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

    const iconClass = computed(() => [name, `${name}-sofa-fill`, { [`${name}-spin`]: props.spin }]);

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
