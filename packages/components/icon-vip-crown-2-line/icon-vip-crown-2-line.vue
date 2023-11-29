<template>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3.497 8.065 4.784 19h14.443l1.286-10.935-4.01 2.673-4.498-6.297-4.498 6.297-4.01-2.673ZM2.806 5.2 7.005 8l4.186-5.86a1 1 0 0 1 1.628-.001L17.005 8l4.2-2.799a1 1 0 0 1 1.547.95L21.11 20.116a1 1 0 0 1-.993.883H3.894a1 1 0 0 1-.993-.883L1.258 6.149A1 1 0 0 1 2.806 5.2Zm9.2 9.8a2 2 0 1 1-.001-4 2 2 0 0 1 0 4Z"></path></svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'IconVipCrown2Line',
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

    const iconClass = computed(() => [name, `${name}-vip-crown-2-line`, { [`${name}-spin`]: props.spin }]);

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
